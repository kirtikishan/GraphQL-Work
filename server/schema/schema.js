const graphql = require('graphql');
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList
} = graphql;

const carType = new GraphQLObjectType({
    name: 'Car',
    fields: () => ({
        modelId: {type: GraphQLInt},
        review: {type: GraphQLString},
        carModel: {
            type: ModelType,
            resolve(parentValue, args) {
                return axios.get(`http://localhost:4000/models/${parentValue.modelId}`)
                    .then(resp => resp.data);
            }
        }
    })
});

const MakeType = new GraphQLObjectType({
    name: 'Make',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        models: {
            type: new GraphQLList(ModelType),
            resolve(parentValue, args) {
                return axios.get(`http://localhost:4000/makes/${parentValue.id}/models`)
                    .then(resp => resp.data);
            }
        }
    })
});

const ModelType = new GraphQLObjectType({
    name: 'Model',
    fields: () => ({
        id: {type: GraphQLInt},
        makeId: {type: GraphQLInt},
        name: {type: GraphQLString},
        price: {type: GraphQLInt},
        imageUrl: {type: GraphQLString},
        make: {
            type: MakeType,
            resolve(parentValue, args) {
                return axios.get(`http://localhost:4000/makes/${parentValue.makeId}`)
                    .then(resp => resp.data);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        model: {
            type: ModelType,
            args: {id: {type: GraphQLInt}},
            resolve(parentValue, args) {
                return axios.get(`http://localhost:4000/models/${args.id}`)
                    .then(resp => resp.data);
            }
        },
        make: {
            type: MakeType,
            args: {id: {type: GraphQLInt}},
            resolve(parentValue, args) {
                return axios.get(`http://localhost:4000/makes/${args.id}`)
                    .then(resp => resp.data);
            }

        },
        makes: {
            type: new GraphQLList(MakeType),
            args: {id: {type: GraphQLInt}},
            resolve(parentValue, args) {
                return axios.get(`http://localhost:4000/makes`)
                    .then(resp => resp.data);
            }
        },
        carOfTheWeek: {
            type: carType,
            resolve(parentValue, args) {
                return axios.get(`http://localhost:4000/carOfTheWeek`)
                    .then(resp => resp.data);
            }
        }
    }

});

module.exports = new GraphQLSchema({
    query: RootQuery
});