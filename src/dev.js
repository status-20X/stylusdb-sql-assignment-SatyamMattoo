const { executeDELETEQuery } = require("./queryExecutor");

const SQL_QUERY = "DELETE FROM courses WHERE course_id = '2'";

executeDELETEQuery(SQL_QUERY).then((data) => {
  console.log("Query Executed", data);
});