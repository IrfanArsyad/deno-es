import db from '../../config/mongod.ts';
import validation from '../validations/UserValidation.ts';
const user = db.collection('users');
export default {
  /*Index*/
  async index(ctx: any) {
    const data = await user.find();
    ctx.response.body = data;
  },

  /* get data user using id */
  async show(ctx: any) {
    const data = await user.findOne(ctx.params.id);

    if (!data) {
      ctx.response.status = 422; // unprocessable entity ,
      ctx.response.body = {
        error: { error: { message: 'name field is required' } },
      };
      return;
    }

    ctx.response.body = data;
  },

  /*Add user using validator */

  async store(ctx: any) {
    const value = await validation.validate(ctx);
    if (value) {
      const insertId = await user.insertOne(value);
      ctx.response.status = 201;
      ctx.response.body = insertId;
    }
  },
  /*destroy data user using id */

  async destroy(ctx: any) {
    const value = await ctx.params.id;
    if (value) {
      const deleteUser = await user.deleteOne({ _id: { $oid: value } });
      ctx.response.status = 200;
      ctx.response.body = {
        success: { message: `${value} has beed deleted !` },
      };
    }
  },
};
