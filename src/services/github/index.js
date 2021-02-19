import axios from "axios";

import {API_URL} from "../../constants";
import {substract30DaysFromToday} from "../../helpers";

class GithubService {
  getTheMostStarredRepoInLast30Days(page) {
    let date = substract30DaysFromToday("-");
    return axios.get(
      API_URL + "?q=created:>" + date + "&sort=stars&order=desc&page=" + page
    );
  }
}

export default new GithubService();
