// Created with Motiva Layama v1.22 LITE https://www.motivacg.com

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "PRUEBA SALA0001", a: "PhysCamera_Layama_prueba_002", p: new BABYLON.Vector3(285.08, 140, 136.497), l: new BABYLON.Vector3(285.08, 140, 137.497)});
   layamaCameras.push({n: "PRUEBA SALA0000", a: "PhysCamera_Layama_prueba_01", p: new BABYLON.Vector3(266.877, 140, 311.838), l: new BABYLON.Vector3(266.877, 140, 312.838)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("512");
   layamaResolutions.push("512");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: true, defRot: 1, altMove: true, altRot: 2};
}

