import SimpleSchema from "simpl-schema";
import Random from "@reactioncommerce/random";
import ReactionError from "@reactioncommerce/reaction-error";


const inpustSchema = new SimpleSchema({
    nombre: {
        type: String,
    }
})

/**
 * @method datosDeEjemplo
 * @summary creates an empty product, with an empty variant
 * @param {Object} context - an object containing the per-request state
 * @return {String} created productId
 */

export default async function datosCliente(context,{input}){
    inpustSchema.validate(input);
    const { appEvents, collections, simpleSchemas } = context
    const { Ejemplo } = collections;
    const newEjemplo = {
        nombre: input.nombre
    }
    await Ejemplo.insertOne(newEjemplo)

    return newEjemplo;
    // console.log('datos que manda el Mutation',input)
}