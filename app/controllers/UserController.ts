import db from '../../config/mongod.ts';
const user = db.collection('users');
export default {
  /*Index*/
  async index(ctx: any) {
    const data = await user.find();
    ctx.response.body = data;
  },

  /*Show */
  async show(ctx: any) {
    // console.log(ctx);

    const id = ctx.params.id;

    const data = await user.findOne({
      _id: { $oid: id },
    });

    console.log(data);
    ctx.response.body = data;
  },

  /*
   * Store
   */
  async store(ctx: any) {
    const { value } = await ctx.request.body();

    /*Validate rquest if has body */
    if (!ctx.request.hasBody) {
      ctx.response.status = 400; // bas request
      ctx.response.body = { error: 'Please provide the required data ' };
      return; // return nothing
    }

    if (!value.email) {
      ctx.response.status = 422; // unprocessable entity ,
      ctx.response.body = {
        error: { error: { message: 'email field is required' } },
      };
      return;
    }

    if (!value.name) {
      ctx.response.status = 422; // unprocessable entity ,
      ctx.response.body = {
        error: { error: { message: 'name field is required' } },
      };
      return;
    }

    if (!value.password) {
      ctx.response.status = 422; // unprocessable entity ,
      ctx.response.body = {
        error: { error: { message: 'password field is required' } },
      };
      return;
    }

    const insertData = await user.insertOne(value);
    ctx.response.status = 201;
    ctx.response.body = insertData;
  },
  /* Destroy */

  async destroy(ctx: any) {
    console.log(ctx);
    await user.deleteOne({ _id: { $oid: ctx.params.id } });
    ctx.response.status = 204; //no content
    ctx.response.body = { message: 'success' };
  },

  /* Update */

  async update(ctx: any) {
    const { value } = await ctx.request.body();

    /*Validate request if has body */
    if (!ctx.request.hasBody) {
      ctx.response.status = 400; // bas request
      ctx.response.body = { error: 'Please provide the required data ' };
      return; // return nothing
    }

    if (!value.email) {
      ctx.response.status = 422; // unprocessable entity ,
      ctx.response.body = {
        error: { error: { message: 'email field is required' } },
      };
      return;
    }

    if (!value.name) {
      ctx.response.status = 422; // unprocessable entity ,
      ctx.response.body = {
        error: { error: { message: 'name field is required' } },
      };
      return;
    }

    if (!value.password) {
      ctx.response.status = 422; // unprocessable entity ,
      ctx.response.body = {
        error: { error: { message: 'password field is required' } },
      };
      return;
    }

    await user.updateOne({ _id: { $oid: ctx.params.id } }, { $set: value });
    ctx.response.status = 200;
    ctx.response.body = { message: 'Updated !' };
  },
};
