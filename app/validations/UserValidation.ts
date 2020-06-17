export default {
  async validate(ctx: any) {
    if (!ctx.request.hasBody) {
      ctx.response.status = 400;
      ctx.response.body = {
        error: 'Pllease Provide the required data !',
      };
      return;
    }

    /* set default value  */
    const { value } = await ctx.request.body();

    /* field required */
    const fields = ['email', 'password', 'name'];
    fields.forEach((field) => {
      if (!value[field]) {
        ctx.response.status = 422;
        ctx.response.body = {
          error: { error: { message: `${field} field is required` } },
        };
        return;
      }
    });
    return value;
  },
};
