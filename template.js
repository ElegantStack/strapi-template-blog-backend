module.exports = function (scope) {
	return {
		package: {
			dependencies: {
				'mime-types': '^2.1.27',
				'fs-extra': '^10.0.0',
				'lodash.set': '^4.3.2',
				'@strapi/plugin-graphql': scope.strapiVersion,
			},
		},
	}
}
