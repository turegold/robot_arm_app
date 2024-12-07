if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

// production: 실제 배포 시
// dev: local 개발 환경
