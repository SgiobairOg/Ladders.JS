/*jslint node: true */
"use strict";

module.exports = {
  getRoot: function(req, res) {
    const response = {
      description:
        "Ladders.JS API - An API for anipulating and managing Maps and content for text-based Adventure Games",
      links: [
        {
          href: "/",
          rel: "self",
          type: "GET"
        }
      ]
    };
    res.status(202).json(response);
  }
};
