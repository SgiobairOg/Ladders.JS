const expect = require("chai").expect;

const { getRoot } = require("../../routes/api/root.route");

let req = {
  body: {}
};

let res = {
  statusCalledWith: "",
  jsonCalledWith: "",
  status: function(status) {
    this.statusCode = status;
    this.statusCalledWith = status;
    return this;
  },
  json: function(data) {
    this.data = data;
    return JSON.stringify(data);
  }
};
describe("Root Route", function() {
  describe("getRoot() handler", function() {
    it("Should return a 202 code ", function() {
      getRoot(req, res);
      expect(res.statusCode).to.equal(202);
    });
    it("Should return Json ", function() {
      getRoot(req, res);
      expect(res.data).to.haveOwnProperty("description");
      expect(res.data).to.haveOwnProperty("links");
    });
  });
});
