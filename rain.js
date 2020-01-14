let scene, camera, renderer

function init () {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 1000)

    camera.position.z = 1
    camera.rotation.x = 1.16
    camera.rotation.y = -0.12
    camera.rotation.z = 0.27

    ambient = new THREE.AmbientLight(0x555555);
    scene.add(ambient);
    directionalLight = new THREE.DirectionalLight(0xffeedd);
    directionalLight.position.set(0,0,1);
    scene.add(directionalLight);

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)



    let loader = new THREE.TextureLoader()
    loader.load("smoke-1.png", function(texture){

        cloudGeo = new THREE.PlaneBufferGeometry(500, 500)
        cloudMaterial = new THREE.MeshLambertMaterial({
            map: texture,
            transparent: true  
        })

            for (let i = 0; i < 25; i++) {
                let cloud = new THREE.Mesh(cloudGeo, cloudMaterial)

                cloud.position.set(
                    Math.random() * 800 - 400,
                    500,
                    Math.random() *500 - 450
                )
                
                cloud.rotation.x = 1.16
                cloud.rotation.y = -0.12
                cloud.rotation.z = Math.random() * 360
                cloud.material.opacity = .6
                
                scene.add(cloud)
            }
        }
    )
}
init()

renderer.render(scene, camera)

