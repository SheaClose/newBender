const { brewDbKey: key } = require("../../serverConfig");
const baseURL = "http://api.brewerydb.com/v2";
const axios = require("axios");

module.exports = app => {
  app.post("/api/proxy", (req, res) => {
    let { method, data, url } = req.body;
    switch (method) {
      case "GET":
        return axios
          .get(`${baseURL}${url}?key=${key}`)
          .then(({ data }) => {
            return res.status(200).json(data);
          })
          .catch(err => res.status(500).json(err));
      case "PUT":
        return axios
          .put(`${baseURL}${url}?key=${key}`, data)
          .then(({ data }) => {
            return res.status(200).json(data);
          })
          .catch(err => res.status(500).json(err));
      case "POST":
        return axios
          .post(`${baseURL}${url}?key=${key}`, data)
          .then(({ data }) => {
            return res.status(200).json(data);
          })
          .catch(err => res.status(500).json(err));
      case "DELETE":
        return axios
          .delete(`${baseURL}${url}?key=${key}`, data)
          .then(({ data }) => {
            return res.status(200).json(data);
          })
          .catch(err => res.status(500).json(err));
    }
  });
};
