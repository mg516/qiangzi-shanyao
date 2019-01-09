const cloud = require('wx-server-sdk')

exports.main = async (event, context) => {
  const fileList = context.fileList;
  const result = await cloud.getTempFileURL({
    fileList,
  })
  return result.fileList
}