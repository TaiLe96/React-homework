import axios from "axios";

export default {
    // Gets all users randomly
    getUsers: function() {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
}
