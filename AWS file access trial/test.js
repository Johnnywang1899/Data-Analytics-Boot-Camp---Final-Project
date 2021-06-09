var AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1",
});
let s3 = new AWS.S3();

let params = {
  Bucket: "finalprojectbootcamp",
};

let getS3Files = async () => {
    let files = [];
  
    await new Promise(function (resolve, reject) {
      s3.listObjectsV2(params, function (err, data) {
        if (data) {
            resolve();
          console.log("Success", data.Buckets);
        } else {
          reject(err);
        }
      });
    });
  };
  
  await getS3Files();