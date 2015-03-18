/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  opacity: <float>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 * }
 */

THREE.MeshDepthMaterial = function ( parameters ) {

	THREE.Material.call( this );

	this.type = 'MeshDepthMaterial';

	this.morphTargets = false;
	this.wireframe = false;
	this.wireframeLinewidth = 1;

	this.setValues( parameters );

};

THREE.MeshDepthMaterial.prototype = Object.create( THREE.Material.prototype );
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;

THREE.MeshDepthMaterial.prototype.clone = function () {

	var material = new THREE.MeshDepthMaterial();

	THREE.Material.prototype.clone.call( this, material );

	material.wireframe = this.wireframe;
	material.wireframeLinewidth = this.wireframeLinewidth;

	return material;

};

THREE.MeshDepthMaterial.prototype.toJSON = function ( meta ) {

	var data;

	// only serialize if not in cache
	if ( meta === undefined || meta.materials[ this.uuid ] === undefined ) {

		data = THREE.Material.prototype.toJSON.call( this, meta );

	  if ( this.blending !== THREE.NormalBlending ) data.blending = this.blending;
	  if ( this.side !== THREE.FrontSide ) data.side = this.side;

	} else {

		data = meta.materials[ this.uuid ];

	}

	return data

};