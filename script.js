// Cambiar la base
const canvas = document.getElementById("canvas");
const colorPicker = document.getElementById("color-picker");
const layerSelect = document.getElementById("layer-select");

let activeLayer = document.getElementById(layerSelect.value); // Capa activa
let activeImage = new Image(); // Imagen activa para el canvas

// Cambiar la forma del rostro
function changeFaceShape(shape) {
  const colorLayer = document.getElementById("base-color-layer");
  const outlineLayer = document.getElementById("base-outline-layer");

  // Actualiza las máscaras y las imágenes con rutas relativas
  colorLayer.style.maskImage = `url(recursos/Bases/${shape}/color.png)`;
  colorLayer.style.webkitMaskImage = `url(recursos/Bases/${shape}/color.png)`;
  outlineLayer.src = `recursos/Bases/${shape}/base.png`;
}

// Cambiar el color del rostro
function updateFaceColor() {
  const colorPicker = document.getElementById("face-color-picker");
  const colorLayer = document.getElementById("base-color-layer");

  // Aplica el nuevo color como fondo
  colorLayer.style.backgroundColor = colorPicker.value;
}

// Cambiar el cabello
function changeHair(style) {
  const hairColorLayer = document.getElementById("hair-color-layer");
  const hairOutlineLayer = document.getElementById("hair-outline-layer");

  // Cambiar el estilo del cabello con rutas relativas
  hairColorLayer.style.maskImage = `url(recursos/cabello/${style}/color.png)`;
  hairColorLayer.style.webkitMaskImage = `url(recursos/cabello/${style}/color.png)`;
  hairOutlineLayer.src = `recursos/cabello/${style}/base.png`;
}

function updateHairColor() {
  const color = document.getElementById("hair-color-picker").value;
  const hairColorLayer = document.getElementById("hair-color-layer");
  hairColorLayer.style.backgroundColor = color;
}

// Cambiar los ojos
function changeEyes(style) {
  const eyeColorLayer = document.getElementById("eye-color-layer");
  const eyeOutlineLayer = document.getElementById("eye-outline-layer");

  // Cambiar el estilo de los ojos con rutas relativas
  eyeColorLayer.style.maskImage = `url(recursos/ojos/${style}/color.png)`;
  eyeColorLayer.style.webkitMaskImage = `url(recursos/ojos/${style}/color.png)`;
  eyeOutlineLayer.src = `recursos/ojos/${style}/base.png`;
}

function updateEyeColor() {
  const color = document.getElementById("eye-color-picker").value;
  const eyeColorLayer = document.getElementById("eye-color-layer");
  eyeColorLayer.style.backgroundColor = color;
}

// Cambiar la boca
function changeMouth(style) {
  const mouthLayer = document.getElementById("mouth-layer");
  mouthLayer.src = `recursos/bocas/${style}.png`;
}

// Cambiar la nariz
function changeNose(style) {
  const noseLayer = document.getElementById("nose-layer");
  noseLayer.src = `recursos/Narices/${style}.png`;
}

document.addEventListener("DOMContentLoaded", function() {
  let elemento = document.getElementById("id_del_elemento");
  if (elemento) {
      console.log(elemento.value);
  } else {
      console.error("El elemento no se encontró en el DOM.");
  }
});
  
function updateActiveLayer() {
    activeLayer = document.getElementById(layerSelect.value);
    activeImage.src = activeLayer.src; // Actualiza la imagen activa
}

function validateColors() {
    const requiredLayers = ["base-color-layer", "hair-color-layer", "eye-color-layer"];
    return requiredLayers.every(id => {
      const color = document.getElementById(id).style.backgroundColor;
      return color && color !== "rgba(0, 0, 0, 0)"; // Verifica que no sea transparente
    });
}
  
// function downloadAvatar() {
//   if (!validateColors()) {
//     alert("¡Selecciona colores para todas las partes del avatar!");
//     return;
//   }

//   const canvas = document.createElement("canvas");
//   const ctx = canvas.getContext("2d");
//   const avatarContainer = document.getElementById("avatar-container");
//   const avatarName = document.getElementById("avatar-name").value.trim() || "avatar";

//   // Tamaño del canvas igual al contenedor del avatar
//   canvas.width = avatarContainer.offsetWidth;
//   canvas.height = avatarContainer.offsetHeight;

//   // Capas a renderizar (divs e imágenes)
//   const layers = [
//     { type: "div", id: "base-color-layer" },    // Color de piel
//     { type: "img", id: "base-outline-layer" },  // Contorno del rostro
//     { type: "div", id: "hair-color-layer" },    // Color del cabello
//     { type: "img", id: "hair-outline-layer" },  // Forma del cabello
//     { type: "div", id: "eye-color-layer" },     // Color de ojos
//     { type: "img", id: "eye-outline-layer" },   // Forma de ojos
//     { type: "img", id: "nose-layer" },          // Nariz
//     { type: "img", id: "mouth-layer" }          // Boca
//   ];

//   // Función para obtener la ruta de la máscara
//   function getMaskPath(id) {
//     switch (id) {
//       case "base-color-layer":
//         return "recursos/Bases/estandar/color.png"; // Ruta de la máscara para el rostro
//       case "hair-color-layer":
//         return "recursos/cabello/corto/color.png"; // Ruta de la máscara para el cabello
//       case "eye-color-layer":
//         return "recursos/ojos/estandar/color.png"; // Ruta de la máscara para los ojos
//       default:
//         return "";
//     }
//   }

//   // Renderizar capas en orden
//   const renderLayers = async () => {
//     for (const { type, id } of layers) {
//       const element = document.getElementById(id);

//       if (type === "div") {
//         // Dibujar capas de color con su máscara
//         const maskImg = new Image();
//         maskImg.src = getMaskPath(id); // Obtener ruta de la máscara
//         await new Promise((resolve) => {
//           maskImg.onload = () => {
//             ctx.fillStyle = element.style.backgroundColor;
//             ctx.globalCompositeOperation = "source-over";
//             ctx.fillRect(0, 0, canvas.width, canvas.height);
//             ctx.globalCompositeOperation = "destination-in";
//             ctx.drawImage(maskImg, 0, 0, canvas.width, canvas.height);
//             resolve();
//           };
//         });
//       } else if (type === "img") {
//         // Dibujar imágenes normales
//         const img = new Image();
//         img.src = element.src;
//         await new Promise((resolve) => {
//           img.onload = () => {
//             ctx.globalCompositeOperation = "source-over";
//             ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//             resolve();
//           };
//         });
//       }
//     }

//     // Descargar la imagen
//     canvas.toBlob((blob) => {
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = `${avatarName}.png`;
//       link.click();
//     }, "image/png");
//   };

//   // Iniciar el proceso de renderizado
//   renderLayers();
// }
  // Obtener ruta de la máscara según la capa

  function downloadAvatar() {
    if (!validateColors()) {
      alert("¡Selecciona colores para todas las partes del avatar!");
      return;
    }
  
    const avatarContainer = document.getElementById("avatar-container");
    const avatarName = document.getElementById("avatar-name").value.trim() || "avatar";
  
    // Tamaño del canvas igual al contenedor del avatar
    const canvasWidth = avatarContainer.offsetWidth;
    const canvasHeight = avatarContainer.offsetHeight;
  
    // Crear canvas para cada conjunto (rostro, cabello, ojos)
    const faceCanvas = document.createElement("canvas");
    const hairCanvas = document.createElement("canvas");
    const eyesCanvas = document.createElement("canvas");
  
    faceCanvas.width = canvasWidth;
    faceCanvas.height = canvasHeight;
    hairCanvas.width = canvasWidth;
    hairCanvas.height = canvasHeight;
    eyesCanvas.width = canvasWidth;
    eyesCanvas.height = canvasHeight;
  
    const faceCtx = faceCanvas.getContext("2d");
    const hairCtx = hairCanvas.getContext("2d");
    const eyesCtx = eyesCanvas.getContext("2d");
  
    // Función para obtener la ruta de la máscara
    function getMaskPath(id) {
      switch (id) {
        case "base-color-layer":
          return "recursos/Bases/estandar/color.png"; // Ruta de la máscara para el rostro
        case "hair-color-layer":
          return "recursos/cabello/corto/color.png"; // Ruta de la máscara para el cabello
        case "eye-color-layer":
          return "recursos/ojos/estandar/color.png"; // Ruta de la máscara para los ojos
        default:
          return "";
      }
    }
  
    // Renderizar el rostro
    const renderFace = async () => {
      const baseColorLayer = document.getElementById("base-color-layer");
      const baseOutlineLayer = document.getElementById("base-outline-layer");
  
      // Dibujar el color de la piel
      const maskImg = new Image();
      maskImg.src = getMaskPath("base-color-layer");
      await new Promise((resolve) => {
        maskImg.onload = () => {
          faceCtx.fillStyle = baseColorLayer.style.backgroundColor;
          faceCtx.globalCompositeOperation = "source-over";
          faceCtx.fillRect(0, 0, canvasWidth, canvasHeight);
          faceCtx.globalCompositeOperation = "destination-in";
          faceCtx.drawImage(maskImg, 0, 0, canvasWidth, canvasHeight);
          resolve();
        };
      });
  
      // Dibujar el contorno del rostro
      const outlineImg = new Image();
      outlineImg.src = baseOutlineLayer.src;
      await new Promise((resolve) => {
        outlineImg.onload = () => {
          faceCtx.globalCompositeOperation = "source-over";
          faceCtx.drawImage(outlineImg, 0, 0, canvasWidth, canvasHeight);
          resolve();
        };
      });
    };
  
    // Renderizar el cabello
    const renderHair = async () => {
      const hairColorLayer = document.getElementById("hair-color-layer");
      const hairOutlineLayer = document.getElementById("hair-outline-layer");
  
      // Dibujar el color del cabello
      const maskImg = new Image();
      maskImg.src = getMaskPath("hair-color-layer");
      await new Promise((resolve) => {
        maskImg.onload = () => {
          hairCtx.fillStyle = hairColorLayer.style.backgroundColor;
          hairCtx.globalCompositeOperation = "source-over";
          hairCtx.fillRect(0, 0, canvasWidth, canvasHeight);
          hairCtx.globalCompositeOperation = "destination-in";
          hairCtx.drawImage(maskImg, 0, 0, canvasWidth, canvasHeight);
          resolve();
        };
      });
  
      // Dibujar la forma del cabello
      const outlineImg = new Image();
      outlineImg.src = hairOutlineLayer.src;
      await new Promise((resolve) => {
        outlineImg.onload = () => {
          hairCtx.globalCompositeOperation = "source-over";
          hairCtx.drawImage(outlineImg, 0, 0, canvasWidth, canvasHeight);
          resolve();
        };
      });
    };
  
    // Renderizar los ojos
    const renderEyes = async () => {
      const eyeColorLayer = document.getElementById("eye-color-layer");
      const eyeOutlineLayer = document.getElementById("eye-outline-layer");
  
      // Dibujar el color de los ojos
      const maskImg = new Image();
      maskImg.src = getMaskPath("eye-color-layer");
      await new Promise((resolve) => {
        maskImg.onload = () => {
          eyesCtx.fillStyle = eyeColorLayer.style.backgroundColor;
          eyesCtx.globalCompositeOperation = "source-over";
          eyesCtx.fillRect(0, 0, canvasWidth, canvasHeight);
          eyesCtx.globalCompositeOperation = "destination-in";
          eyesCtx.drawImage(maskImg, 0, 0, canvasWidth, canvasHeight);
          resolve();
        };
      });
  
      // Dibujar la forma de los ojos
      const outlineImg = new Image();
      outlineImg.src = eyeOutlineLayer.src;
      await new Promise((resolve) => {
        outlineImg.onload = () => {
          eyesCtx.globalCompositeOperation = "source-over";
          eyesCtx.drawImage(outlineImg, 0, 0, canvasWidth, canvasHeight);
          resolve();
        };
      });
    };
  
    // Renderizar nariz y boca (directamente en el canvas final)
    const renderNoseAndMouth = async (ctx) => {
      const noseLayer = document.getElementById("nose-layer");
      const mouthLayer = document.getElementById("mouth-layer");
  
      // Dibujar la nariz
      const noseImg = new Image();
      noseImg.src = noseLayer.src;
      await new Promise((resolve) => {
        noseImg.onload = () => {
          ctx.globalCompositeOperation = "source-over";
          ctx.drawImage(noseImg, 0, 0, canvasWidth, canvasHeight);
          resolve();
        };
      });
  
      // Dibujar la boca
      const mouthImg = new Image();
      mouthImg.src = mouthLayer.src;
      await new Promise((resolve) => {
        mouthImg.onload = () => {
          ctx.globalCompositeOperation = "source-over";
          ctx.drawImage(mouthImg, 0, 0, canvasWidth, canvasHeight);
          resolve();
        };
      });
    };
  
    // Crear el canvas final
    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = canvasWidth;
    finalCanvas.height = canvasHeight;
    const finalCtx = finalCanvas.getContext("2d");
  
    // Renderizar y combinar todas las partes
    const renderAndCombine = async () => {
      await renderFace();
      await renderHair();
      await renderEyes();
  
      // Dibujar el rostro en el canvas final
      finalCtx.drawImage(faceCanvas, 0, 0, canvasWidth, canvasHeight);
  
      // Dibujar el cabello en el canvas final
      finalCtx.drawImage(hairCanvas, 0, 0, canvasWidth, canvasHeight);
  
      // Dibujar los ojos en el canvas final
      finalCtx.drawImage(eyesCanvas, 0, 0, canvasWidth, canvasHeight);
  
      // Dibujar nariz y boca en el canvas final
      await renderNoseAndMouth(finalCtx);
  
      // Descargar la imagen final
      finalCanvas.toBlob((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${avatarName}.png`;
        link.click();
      }, "image/png");
    };
  
    // Iniciar el proceso de renderizado y combinación
    renderAndCombine();
  }

  function getMaskPath(id) {
    const masks = {
      "base-color-layer": "recursos/Bases/estandar/color.png", // Ajustar según forma seleccionada
      "hair-color-layer": "recursos/cabello/corto/color.png",  // Ajustar según estilo
      "eye-color-layer": "recursos/ojos/estandar/color.png"    // Ajustar según estilo
    };
    return masks[id];
}



  