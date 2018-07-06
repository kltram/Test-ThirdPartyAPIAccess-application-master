const axios = require('axios');

module.exports = {

    getUser(username,thisval) {

    return axios.get(`https://api.github.com/users/${username}`)
      .then(resp => {
      			console.log('jsss finse')
			  if (resp.status >= 200) {//Check the response status
				  filmdata = resp.data;
				  filmdata['status'] = resp.status;
			  }else{// if response code is not 200, then show error
				filmdata['status'] = resp.status;
			  }
			  if(thisval != null){
				  var arr = [];
				  arr.push(filmdata)
				  thisval.returnfn(arr);
			  }
			  return filmdata
			})
      .catch(error => console.log(error));
  }
};