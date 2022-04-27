const api = "https://625bc0d450128c5702070768.mockapi.io/api/data";
function Services() {
  this.fetchData = function () {
    return axios({
      url: api,
      method: "GET",
    });
  };
  this.addData = function (data) {
    return axios({
      url: api,
      method: "POST",
      data,
    });
  };
  this.deleteData = function (id) {
    return axios({
      url: `${api}/${id}`,
      method: "DELETE",
    });
  };
  this.getDataById = function (id) {
    return axios({
      url: `${api}/${id}`,
      method: "GET",
    });
  };
  this.updateData = function (id, data) {
    return axios({
      url: `${api}/${id}`,
      method: "PUT",
      data,
    });
  };
}
