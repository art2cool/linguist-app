export function handleError(res, code, err){
  console.log('==========ERROR===========')
  console.log(code, err)
  return res
    .status(code)
    .json({
      err: err,
      data: null
    });
}
