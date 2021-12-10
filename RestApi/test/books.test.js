const supertest = require("supertest");
const should = require("should");

const server = supertest.agent("http://localhost:9000");

const book1 = {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602570691l/53138095.jpg',
    title:'A Court of Silver Flames',
    series:'A Court of Thorns and Roses' ,
    bookInSeries:4,
    authors:'Sarah J. Maas',
    description: "Nesta Archeron has always been prickly-proud, swift to anger, and slow to forgive. And ever since being forced into the Cauldron and becoming High Fae against her will, shes struggled to find a place for herself within the strange, deadly world she inhabits. Worse, she cant seem to move past the horrors of the war with Hybern and all she lost in it",
    read: 'not-read',
    format: 'audiobook',
};
const book2 = {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618913179l/54985743.jpg',
    title:'People We Meet on Vacation',
    authors:'Emily Henry',
    description: "Poppy and Alex. Alex and Poppy. They have nothing in common. Shes a wild child; he wears khakis. She has insatiable wanderlust; he prefers to stay home with a book. And somehow, ever since a fateful car share home from college many years ago, they are the very best of friends. For most of the year they live far apart—she’s in New York City, and he’s in their small hometown—but every summer, for a decade, they have taken one glorious week of vacation together.",
    read: 'to-read',
    format: 'e-book',
};


const book1Update = {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1614887007l/57282218.jpg',
    title:'A Court of Silver Flames',
    series:'A Court of Thorns and Roses' ,
    bookInSeries:4,
    authors:'Sarah J. Maas',
    description: "Nesta Archeron has always been prickly-proud, swift to anger, and slow to forgive. And ever since being forced into the Cauldron and becoming High Fae against her will, shes struggled to find a place for herself within the strange, deadly world she inhabits. Worse, she cant seem to move past the horrors of the war with Hybern and all she lost in it",
    read: 'read',
    format: 'audiobook',
};
const book2Update = {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618913179l/54985743.jpg',
    title:'People We Meet on Vacation',
    authors:'Emily Henry',
    description: "Poppy and Alex. Alex and Poppy. They have nothing in common. She’s a wild child; he wears khakis. She has insatiable wanderlust; he prefers to stay home with a book. And somehow, ever since a fateful car share home from college many years ago, they are the very best of friends. For most of the year they live far apart—she’s in New York City, and he’s in their small hometown—but every summer, for a decade, they have taken one glorious week of vacation together.",
    read: 'read',
    format: 'e-book',
};

describe('Books RestApi unit test', function(){

    it.skip("Add book1", (done) => {
        server
        .post("/api/books")
        .send(book1)
        .expect("Content-type", /json/)
        .expect(201) // THis is HTTP response
        .end((err, res) => {
            should(res.status).equal(201);
            should(res.body.img).equal(book1.img);
            should(res.body.title).equal(book1.title);
            should(res.body.series).equal(book1.series);
            should(res.body.bookInSeries).equal(book1.bookInSeries);
            should(res.body.authors).equal(book1.authors);
         
            should(res.body.description).equal(book1.description);
            should(res.body.read).equal(book1.read);
            should(res.body.format).equal(book1.format); 
            book1._id = res.body._id;
            done();
        });
});

it.skip("Add book2", (done) => {
    server
    .post("/api/books")
    .send(book2)
    .expect("Content-type", /json/)
    .expect(201) // THis is HTTP response
    .end((err, res) => {
        should(res.status).equal(201);
        should(res.body.img).equal(book2.img);
        should(res.body.title).equal(book2.title);
        should(res.body.authors).equal(book2.authors);
     
        should(res.body.description).equal(book2.description);
        should(res.body.read).equal(book2.read);
        should(res.body.format).equal(book2.format); 
        book2._id = res.body._id;
        done();
    });
});

it("Get book1  by id", (done) => {
    server
        .get("/api/books/" + book1._id)
        .expect("Content-type", /json/)
        .expect(200) // THis is HTTP response
        .end((err, res) => {
            should(res.status).equal(200);
            should(res.body.img).equal(book1.img);
            should(res.body.title).equal(book1.title);
            should(res.body.series).equal(book1.series);
            should(res.body.bookInSeries).equal(book1.bookInSeries);
            should(res.body.authors).equal(book1.authors);
         
            should(res.body.description).equal(book1.description);
            should(res.body.read).equal(book1.read);
            should(res.body.format).equal(book1.format); 
            book1._id = res.body._id;
            done();
        });
});
it("Get all books", (done) => {
    server
        .get("/api/books")
        .expect("Content-type", /json/)
        .expect(200) // THis is HTTP response
        .end((err, res) => {
            should(res.status).equal(200);
            should(res.body.length).equal(20);
            done();
        });
});
it.skip("Update book1 with nothing", (done) => {
    server
        .put("/api/books" + book1._id)
        .expect("Content-type", /json/)
        .expect(404) // THis is HTTP response
        .end((err, res) => {
            should(res.status).equal(404);
            should(res.body.message).equal("Nothing to update");
            done();
        });
});

it.skip("Update book1 full", (done) => {
    server
        .put("/api/books/" + book1._id)
        .send(book1Update)
        .expect("Content-type", /json/)
        .expect(200) // THis is HTTP response
        .end((err, res) => {
            should(res.status).equal(201);
            should(res.body.img).equal(book1Update.img);
            should(res.body.title).equal(book1Update.title);
            should(res.body.series).equal(book1Updateook1.series);
            should(res.body.bookInSeries).equal(book1Update.bookInSeries);
            should(res.body.authors).equal(book1Update.authors);
         
            should(res.body.description).equal(book1Update.description);
            should(res.body.read).equal(book1Update.read);
            should(res.body.format).equal(book1Update.format); 
            done();
        });
});
it("Update book1 authors", (done) => {
    server
        .put("/api/books/author/" + book1._id)
        .send({ "authors": book1.authors })
        .expect("Content-type", /json/)
        .expect(200) // THis is HTTP response
        .end((err, res) => {
            should(res.status).equal(200);
            should(res.body.img).equal(book1Update.img);
            should(res.body.title).equal(book1Update.title);
            should(res.body.series).equal(book1Update.series);
            should(res.body.bookInSeries).equal(book1Update.bookInSeries);
            should(res.body.authors).equal(book1.authors);
         
            should(res.body.description).equal(book1Update.description);
            should(res.body.read).equal(book1Update.read);
            should(res.body.format).equal(book1Update.format); 
            done();
        });
});
});