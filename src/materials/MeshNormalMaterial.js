/**
 * @author mrdoob / http://mrdoob.com/
 *
 * parameters = {
 *  opacity: <float>,
 *
 *  shading: THREE.FlatShading,
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 * }
 */

THREE.MeshNormalMaterial = function ( parameters ) {

	THREE.Material.call( this, parameters );

	this.type = 'MeshNormalMaterial';

	this.wireframe = false;
	this.wireframeLinewidth = 1;

	this.morphTargets = false;

	this.setValues( parameters );

};

THREE.MeshNormalMaterial.prototype = Object.create( THREE.Material.prototype );
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;

THREE.MeshNormalMaterial.prototype.clone = function () {

	var material = new THREE.MeshNormalMaterial();

	THREE.Material.prototype.clone.call( this, material );

	material.wireframe = this.wireframe;
	material.wireframeLinewidth = this.wireframeLinewidth;

	return material;

};

THREE.MeshPhongMaterial.prototype.toJSON = function ( meta ) {

	var data;

	// only serialize if not in cache
	if ( meta === undefined || meta.materials[ this.uuid ] === undefined ) {

		data = THREE.Material.prototype.toJSON.call( this, meta );

	  if ( this.blending !== THREE.NormalBlending ) data.blending = this.blending;
	  if ( this.side !== THREE.FrontSide ) data.side = this.side;

	} else {

		data = meta.materials[ this.uuid ];

	}

	return data;

};