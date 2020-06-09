export default ({ response }: { response: any }) => {
  response.status = 404;
  response.body = {
    error: 'Opps ! Sorry Page Not Found !',
  };
};
