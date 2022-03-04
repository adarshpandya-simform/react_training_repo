import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe, Done } from "mocha";
import { server } from "../src/app";

// Assertion style
chai.expect;

// using chai-http
chai.use(chaiHttp);

// test

describe("test todo api", () => {
	/**
	 * get todos
	 */
	describe("GET /api/todos", () => {
		it("should return all todos", (done: Done) => {
			chai
				.request(server)
				.get("/api/todos")
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res.status).to.be.equal(200);
					expect(res.body).to.not.be.null;
					expect(res.body).to.not.be.undefined;
					expect(res.body.success).to.be.equal(true);
					expect(res.body.data).to.not.be.undefined;
					done();
				});
		});
	});
	/**
	 * get todo
	 */
	describe("GET /api/todo/:id", () => {
		it("should return todo on correct id", (done: Done) => {
			chai
				.request(server)
				.get("/api/todo/6221ad9d20a7a3907a31afc4")
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res.status).to.be.equal(200);
					expect(res.body).to.not.be.null;
					expect(res.body).not.to.be.undefined;
					expect(res.body.success).to.be.equal(true);
					expect(res.body.data).to.not.be.equal([]);
					expect(res.body.data).to.not.be.null;
					expect(res.body.data).to.not.be.undefined;
					expect(res.body.data.todo).to.haveOwnProperty(
						"title",
						"this is title"
					);
					done();
				});
		});

		it("should not return todo on incorrect id", (done: Done) => {
			chai
				.request(server)
				.get("/api/todo/6221ad9d20a7a3907a31afc3")
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res.status).to.be.equal(200);
					expect(res.body.success).to.be.equal(true);
					expect(res.body.data.todo).to.be.null;
					done();
				});
		});

		it("should throw error msg on invalid id", (done: Done) => {
			chai
				.request(server)
				.get("/api/todo/wrong_id324")
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res.status).to.be.equal(200);
					expect(res.body).to.not.be.null;
					expect(res.body).to.not.be.undefined;
					expect(res.body.success).to.be.equal(false);
					expect(res.body.data).to.be.null;
					expect(res.body.error).to.not.be.null;
					done();
				});
		});
	});
	/**
	 * insert todo
	 */
	describe("POST /api/add-todo", () => {
		const todo = {
			title: "random title",
			description: "this is just a random description",
		};
		it("should return a stored todo from db", (done: Done) => {
			chai
				.request(server)
				.post("/api/add-todo")
				.send(todo)
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res.status).to.be.eq(200);
					expect(res.body).to.not.be.null;
					expect(res.body).to.not.be.undefined;
					expect(res.body.success).to.be.eq(true);
					expect(res.body.data).to.not.be.null;
					expect(res.body.data).to.not.be.undefined;
					expect(res.body.data.todo).to.not.be.null;
					expect(res.body.data.todo).to.have.property("_id");
					expect(res.body.data.todo).to.have.property("title");
					expect(res.body.data.todo).to.have.property("completed");
					expect(res.body.data.todo).to.have.property("description");
					done();
				});
		});
	});
	/**
	 * delete todo
	 */
	describe("DELETE /api/delete-todo", () => {
		it("should delete todo on correct id", (done: Done) => {
			chai
				.request(server)
				.delete("/api/delete-todo/6221b4d989b3a7486ea1365d")
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res.status).to.be.eq(200);
					expect(res.body).to.not.be.null;
					expect(res.body).to.not.be.undefined;
					expect(res.body.success).to.be.eq(true);
					expect(res.body.data).to.not.be.null;
					expect(res.body.data).to.not.be.undefined;
					expect(res.body.data.todo).to.have.property("title");
					expect(res.body.data.todo).to.have.property("_id");
					expect(res.body.data.todo).to.have.property("completed");
					expect(res.body.data.todo).to.have.property("description");
					done();
				});
		});

		it("should not delete todo on incorrect id", (done: Done) => {
			chai
				.request(server)
				.delete("/api/delete-todo/6221b4d989b3a7486ea1365d")
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res.status).to.be.equal(200);
					expect(res.body).to.not.be.null;
					expect(res.body).to.not.be.undefined;
					expect(res.body.success).to.be.eq(true);
					expect(res.body.data).to.not.be.null;
					expect(res.body.data).to.not.be.undefined;
					expect(res.body.data.todo).to.be.null;
					done();
				});
		});

		it("should throw error on invalid id", (done: Done) => {
			chai
				.request(server)
				.delete("/api/delete-todo/thewrongid")
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res.status).to.be.eq(200);
					expect(res.body).to.not.be.null;
					expect(res.body).to.not.be.undefined;
					expect(res.body.success).to.be.eq(false);
					expect(res.body.data).to.be.null;
					expect(res.body.error).to.not.be.null;
					done();
				});
		});
	});
	/**
	 * update todo
	 * */
	describe("UPDATE /api/update-todo", () => {
		const todoToBeUpdated = {
			id: "6221ad9d20a7a3907a31afc4",
			title: "this is updated todo",
			description: "surprise!!!",
			completed: true,
		};
		it("should return updated todo", (done: Done) => {
			chai
				.request(server)
				.patch("/api/update-todo")
				.send(todoToBeUpdated)
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res.status).to.be.eq(200);
					expect(res.body).to.not.be.null;
					expect(res.body).to.not.be.undefined;
					expect(res.body.success).to.be.eq(true);
					expect(res.body.data).to.not.be.null;
					expect(res.body.data).to.not.be.undefined;
					expect(res.body.data.todo).to.not.be.null;
					expect(res.body.data.todo).to.haveOwnProperty(
						"title",
						"this is updated todo"
					);
					expect(res.body.data.todo).to.haveOwnProperty(
						"description",
						"surprise!!!"
					);
					expect(res.body.data.todo).to.haveOwnProperty("completed", true);
					done();
				});
		});
	});
	/**
	 * 404 test
	 */
	describe("404 test", () => {
		it("should return 404 on invalid routes", (done: Done) => {
			chai
				.request(server)
				.get("/api/randomroute")
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res.status).to.be.equal(404);
				});
			done();
		});
	});
});
