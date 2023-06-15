import clientSchema from "../models/client.js";

export const clientResolvers = {
    Query: {
        clients: async () => {
            return await clientSchema.find();
        },

        client: async (_, { id }) => {
            return await clientSchema.findById(id);
        },
    },

    Mutation: {
        createClient: async (_, { clientInput }) => {
            const isclientalreadyexist = await clientSchema.findOne({ name: clientInput.name });
            if (isclientalreadyexist) {
                throw new Error("client already exist");
            }
            const client = new clientSchema({
                name: clientInput.name,
                email: clientInput.email,
                phone: clientInput.phone,
                address: clientInput.address,
                status: clientInput.status,
                previousStatus: clientInput.previousStatus,
            });
            return await client.save();
        },

        updateClient: async (_, { id, clientInput }) => {
            const client = await clientSchema.findById(id);
            if (!client) {
                throw new Error("client not found");
            }
            client.name = clientInput.name;
            client.email = clientInput.email;
            client.phone = clientInput.phone;
            client.address = clientInput.address;
            client.status = clientInput.status;
            client.previousStatus = clientInput.previousStatus;
            return await client.save();
        },

        deleteClient: async (_, { id }) => {
            const client = await clientSchema.findById(id);
            if (!client) {
                throw new Error("client not found");
            }
            await clientSchema.deleteOne({ _id: id });
            return client;
        }
    },
}