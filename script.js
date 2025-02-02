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

function changeHair(style) {
  const hairColorLayer = document.getElementById("hair-color-layer");
  const hairOutlineLayer = document.getElementById("hair-outline-layer");

  if (style === "ninguno") {
    hairColorLayer.style.display = "none";
    hairOutlineLayer.style.display = "none";
  } else {
    hairColorLayer.style.display = "block";
    hairOutlineLayer.style.display = "block";
    hairColorLayer.style.maskImage = `url(recursos/cabello/${style}/color.png)`;
    hairColorLayer.style.webkitMaskImage = `url(recursos/cabello/${style}/color.png)`;
    hairOutlineLayer.src = `recursos/cabello/${style}/base.png`;
  }
}

function changeFacialHair(style) {
  const facialHairColorLayer = document.getElementById("facialhair-color-layer");
  const facialHairOutlineLayer = document.getElementById("facialhair-outline-layer");

  if (style === "ninguno") {
    facialHairColorLayer.style.display = "none";
    facialHairOutlineLayer.style.display = "none";
  } else {
    facialHairColorLayer.style.display = "block";
    facialHairOutlineLayer.style.display = "block";
    facialHairColorLayer.style.maskImage = `url(recursos/vellofacial/${style}/color.png)`;
    facialHairColorLayer.style.webkitMaskImage = `url(recursos/vellofacial/${style}/color.png)`;
    facialHairOutlineLayer.src = `recursos/vellofacial/${style}/base.png`;
  }
}

function changeGlasses(style) {
  const glassesColorLayer = document.getElementById("glasses-color-layer");
  const glassesOutlineLayer = document.getElementById("glasses-outline-layer");

  if (style === "ninguno") {
    glassesColorLayer.style.display = "none";
    glassesOutlineLayer.style.display = "none";
  } else {
    glassesColorLayer.style.display = "block";
    glassesOutlineLayer.style.display = "block";
    glassesColorLayer.style.maskImage = `url(recursos/lentes/${style}/color.png)`;
    glassesColorLayer.style.webkitMaskImage = `url(recursos/lentes/${style}/color.png)`;
    glassesOutlineLayer.src = `recursos/lentes/${style}/base.png`;
  }
}

// // Cambiar el vello facial
// function changeFacialHair(style) {
//   const facialHairColorLayer = document.getElementById("facialhair-color-layer");
//   const facialHairOutlineLayer = document.getElementById("facialhair-outline-layer");

//   // Actualiza las máscaras y las imágenes con rutas relativas
//   facialHairColorLayer.style.maskImage = `url(recursos/vellofacial/${style}/color.png)`;
//   facialHairColorLayer.style.webkitMaskImage = `url(recursos/vellofacial/${style}/color.png)`;
//   facialHairOutlineLayer.src = `recursos/vellofacial/${style}/base.png`; // Corregido aquí
// }

// Cambiar el color del vello facial
function updateFacialHairColor() {
  const color = document.getElementById("facialhair-color-picker").value;
  const facialHairColorLayer = document.getElementById("facialhair-color-layer");
  facialHairColorLayer.style.backgroundColor = color;
}

// // Cambiar los lentes
// function changeGlasses(style) {
//   const glassesColorLayer = document.getElementById("glasses-color-layer");
//   const glassesOutlineLayer = document.getElementById("glasses-outline-layer");

//   // Cambiar el estilo de los lentes con rutas relativas
//   glassesColorLayer.style.maskImage = `url(recursos/lentes/${style}/color.png)`;
//   glassesColorLayer.style.webkitMaskImage = `url(recursos/lentes/${style}/color.png)`;
//   glassesOutlineLayer.src = `recursos/lentes/${style}/base.png`;
// }

function updateGlassesColor() {
  const color = document.getElementById("glasses-color-picker").value;
  const glassesColorLayer = document.getElementById("glasses-color-layer");
  glassesColorLayer.style.backgroundColor = color;
}

// // Cambiar el cabello
// function changeHair(style) {
//   const hairColorLayer = document.getElementById("hair-color-layer");
//   const hairOutlineLayer = document.getElementById("hair-outline-layer");

//   // Cambiar el estilo del cabello con rutas relativas
//   hairColorLayer.style.maskImage = `url(recursos/cabello/${style}/color.png)`;
//   hairColorLayer.style.webkitMaskImage = `url(recursos/cabello/${style}/color.png)`;
//   hairOutlineLayer.src = `recursos/cabello/${style}/base.png`;
// }

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
  
function downloadAvatar() {
  if (!validateColors()) {
    alert("¡Selecciona colores para todas las partes del avatar!");
    return;
  }

  const avatarContainer = document.getElementById("avatar-container");
  const avatarName = document.getElementById("avatar-name").value.trim() || "avatar";

  // Obtener los estilos seleccionados
  const selectedFaceShape = document.querySelector('input[name="face-shape"]:checked').value;
  const selectedHairStyle = document.querySelector('input[name="hair-style"]:checked').value;
  const selectedFacialHairStyle = document.querySelector('input[name="facialhair-style"]:checked').value;
  const selectedGlassesStyle = document.querySelector('input[name="glasses-style"]:checked').value;
  const selectedEyeStyle = document.querySelector('input[name="eye-style"]:checked').value;

  // Tamaño del canvas igual al contenedor del avatar
  const canvasWidth = avatarContainer.offsetWidth;
  const canvasHeight = avatarContainer.offsetHeight;

  // Crear canvas para cada conjunto (rostro, cabello, ojos, vello facial, lentes)
  const faceCanvas = document.createElement("canvas");
  const hairCanvas = document.createElement("canvas");
  const eyesCanvas = document.createElement("canvas");
  const facialHairCanvas = document.createElement("canvas");
  const glassesCanvas = document.createElement("canvas");

  faceCanvas.width = canvasWidth;
  faceCanvas.height = canvasHeight;
  hairCanvas.width = canvasWidth;
  hairCanvas.height = canvasHeight;
  eyesCanvas.width = canvasWidth;
  eyesCanvas.height = canvasHeight;
  facialHairCanvas.width = canvasWidth;
  facialHairCanvas.height = canvasHeight;
  glassesCanvas.width = canvasWidth;
  glassesCanvas.height = canvasHeight;

  const faceCtx = faceCanvas.getContext("2d");
  const hairCtx = hairCanvas.getContext("2d");
  const eyesCtx = eyesCanvas.getContext("2d");
  const facialHairCtx = facialHairCanvas.getContext("2d");
  const glassesCtx = glassesCanvas.getContext("2d");

  // Función para obtener la ruta de la máscara
  function getMaskPath(id, shape, hairStyle, eyeStyle, facialHairStyle, glassesStyle) {
    const masks = {
      "base-color-layer": `recursos/Bases/${shape}/color.png`,
      "hair-color-layer": `recursos/cabello/${hairStyle}/color.png`,
      "eye-color-layer": `recursos/ojos/${eyeStyle}/color.png`,
      "facialhair-color-layer": `recursos/vellofacial/${facialHairStyle}/color.png`,
      "glasses-color-layer": `recursos/lentes/${glassesStyle}/color.png`
    };
    return masks[id];
  }

  // Renderizar el rostro
  const renderFace = async (shape) => {
    const baseColorLayer = document.getElementById("base-color-layer");
    const baseOutlineLayer = document.getElementById("base-outline-layer");

    // Dibujar el color de la piel
    const maskImg = new Image();
    maskImg.src = getMaskPath("base-color-layer", shape, null, null, null, null);
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

  // Renderizar el cabello (solo si no es "ninguno")
  const renderHair = async (hairStyle) => {
    if (hairStyle === "ninguno") return; // No renderizar si no hay cabello

    const hairColorLayer = document.getElementById("hair-color-layer");
    const hairOutlineLayer = document.getElementById("hair-outline-layer");

    // Dibujar el color del cabello
    const maskImg = new Image();
    maskImg.src = getMaskPath("hair-color-layer", null, hairStyle, null, null, null);
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

  // Renderizar el vello facial (solo si no es "ninguno")
  const renderFacialHair = async (facialHairStyle) => {
    if (facialHairStyle === "ninguno") return; // No renderizar si no hay vello facial

    const facialHairColorLayer = document.getElementById("facialhair-color-layer");
    const facialHairOutlineLayer = document.getElementById("facialhair-outline-layer");

    // Dibujar el color del vello facial
    const maskImg = new Image();
    maskImg.src = getMaskPath("facialhair-color-layer", null, null, null, facialHairStyle, null);
    await new Promise((resolve) => {
      maskImg.onload = () => {
        facialHairCtx.fillStyle = facialHairColorLayer.style.backgroundColor;
        facialHairCtx.globalCompositeOperation = "source-over";
        facialHairCtx.fillRect(0, 0, canvasWidth, canvasHeight);
        facialHairCtx.globalCompositeOperation = "destination-in";
        facialHairCtx.drawImage(maskImg, 0, 0, canvasWidth, canvasHeight);
        resolve();
      };
    });

    // Dibujar la forma del vello facial
    const outlineImg = new Image();
    outlineImg.src = facialHairOutlineLayer.src;
    await new Promise((resolve) => {
      outlineImg.onload = () => {
        facialHairCtx.globalCompositeOperation = "source-over";
        facialHairCtx.drawImage(outlineImg, 0, 0, canvasWidth, canvasHeight);
        resolve();
      };
    });
  };

  // Renderizar los lentes (solo si no es "ninguno")
  const renderGlasses = async (glassesStyle) => {
    if (glassesStyle === "ninguno") return; // No renderizar si no hay lentes

    const glassesColorLayer = document.getElementById("glasses-color-layer");
    const glassesOutlineLayer = document.getElementById("glasses-outline-layer");

    // Dibujar el color de los lentes
    const maskImg = new Image();
    maskImg.src = getMaskPath("glasses-color-layer", null, null, null, null, glassesStyle);
    await new Promise((resolve) => {
      maskImg.onload = () => {
        glassesCtx.fillStyle = glassesColorLayer.style.backgroundColor;
        glassesCtx.globalCompositeOperation = "source-over";
        glassesCtx.fillRect(0, 0, canvasWidth, canvasHeight);
        glassesCtx.globalCompositeOperation = "destination-in";
        glassesCtx.drawImage(maskImg, 0, 0, canvasWidth, canvasHeight);
        resolve();
      };
    });

    // Dibujar la forma de los lentes
    const outlineImg = new Image();
    outlineImg.src = glassesOutlineLayer.src;
    await new Promise((resolve) => {
      outlineImg.onload = () => {
        glassesCtx.globalCompositeOperation = "source-over";
        glassesCtx.drawImage(outlineImg, 0, 0, canvasWidth, canvasHeight);
        resolve();
      };
    });
  };

  // Renderizar los ojos
  const renderEyes = async (eyeStyle) => {
    const eyeColorLayer = document.getElementById("eye-color-layer");
    const eyeOutlineLayer = document.getElementById("eye-outline-layer");

    // Dibujar el color de los ojos
    const maskImg = new Image();
    maskImg.src = getMaskPath("eye-color-layer", null, null, eyeStyle, null, null);
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
    await renderFace(selectedFaceShape); // Rostro
    await renderFacialHair(selectedFacialHairStyle); // Vello facial
    await renderEyes(selectedEyeStyle); // Ojos
    await renderGlasses(selectedGlassesStyle); // Lentes (ahora después de los ojos)
    await renderHair(selectedHairStyle); // Cabello

    // Dibujar el rostro en el canvas final
    finalCtx.drawImage(faceCanvas, 0, 0, canvasWidth, canvasHeight);

    // Dibujar el cabello en el canvas final (si existe)
    if (selectedHairStyle !== "ninguno") {
      finalCtx.drawImage(hairCanvas, 0, 0, canvasWidth, canvasHeight);
    }

    // Dibujar el vello facial en el canvas final (si existe)
    if (selectedFacialHairStyle !== "ninguno") {
      finalCtx.drawImage(facialHairCanvas, 0, 0, canvasWidth, canvasHeight);
    }

    // Dibujar los ojos en el canvas final
    finalCtx.drawImage(eyesCanvas, 0, 0, canvasWidth, canvasHeight);

    // Dibujar los lentes en el canvas final (si existen)
    if (selectedGlassesStyle !== "ninguno") {
      finalCtx.drawImage(glassesCanvas, 0, 0, canvasWidth, canvasHeight);
    }

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


  // function downloadAvatar() {
  //   if (!validateColors()) {
  //     alert("¡Selecciona colores para todas las partes del avatar!");
  //     return;
  //   }
  
  //   const avatarContainer = document.getElementById("avatar-container");
  //   const avatarName = document.getElementById("avatar-name").value.trim() || "avatar";
  
  //   // Obtener la forma de la base seleccionada
  //   const selectedFaceShape = document.querySelector('input[name="face-shape"]:checked').value;
  
  //   // Obtener el estilo de cabello seleccionado
  //   const selectedHairStyle = document.querySelector('input[name="hair-style"]:checked').value;
  
  //   // Obtener el estilo de ojos seleccionado
  //   const selectedEyeStyle = document.querySelector('input[name="eye-style"]:checked').value;
  
  //   // Tamaño del canvas igual al contenedor del avatar
  //   const canvasWidth = avatarContainer.offsetWidth;
  //   const canvasHeight = avatarContainer.offsetHeight;
  
  //   // Crear canvas para cada conjunto (rostro, cabello, ojos)
  //   const faceCanvas = document.createElement("canvas");
  //   const hairCanvas = document.createElement("canvas");
  //   const eyesCanvas = document.createElement("canvas");
  
  //   faceCanvas.width = canvasWidth;
  //   faceCanvas.height = canvasHeight;
  //   hairCanvas.width = canvasWidth;
  //   hairCanvas.height = canvasHeight;
  //   eyesCanvas.width = canvasWidth;
  //   eyesCanvas.height = canvasHeight;
  
  //   const faceCtx = faceCanvas.getContext("2d");
  //   const hairCtx = hairCanvas.getContext("2d");
  //   const eyesCtx = eyesCanvas.getContext("2d");
  
  //   // Renderizar el rostro con la forma seleccionada
  //   const renderFace = async (shape) => {
  //     const baseColorLayer = document.getElementById("base-color-layer");
  //     const baseOutlineLayer = document.getElementById("base-outline-layer");
  
  //     // Dibujar el color de la piel
  //     const maskImg = new Image();
  //     maskImg.src = getMaskPath("base-color-layer", shape, null, null); // Pasa la forma seleccionada
  //     await new Promise((resolve) => {
  //       maskImg.onload = () => {
  //         faceCtx.fillStyle = baseColorLayer.style.backgroundColor;
  //         faceCtx.globalCompositeOperation = "source-over";
  //         faceCtx.fillRect(0, 0, canvasWidth, canvasHeight);
  //         faceCtx.globalCompositeOperation = "destination-in";
  //         faceCtx.drawImage(maskImg, 0, 0, canvasWidth, canvasHeight);
  //         resolve();
  //       };
  //     });
  
  //     // Dibujar el contorno del rostro
  //     const outlineImg = new Image();
  //     outlineImg.src = baseOutlineLayer.src;
  //     await new Promise((resolve) => {
  //       outlineImg.onload = () => {
  //         faceCtx.globalCompositeOperation = "source-over";
  //         faceCtx.drawImage(outlineImg, 0, 0, canvasWidth, canvasHeight);
  //         resolve();
  //       };
  //     });
  //   };
  
  //   // Renderizar el cabello con el estilo seleccionado
  //   const renderHair = async (hairStyle) => {
  //     const hairColorLayer = document.getElementById("hair-color-layer");
  //     const hairOutlineLayer = document.getElementById("hair-outline-layer");
  
  //     // Dibujar el color del cabello
  //     const maskImg = new Image();
  //     maskImg.src = getMaskPath("hair-color-layer", null, hairStyle, null); // Pasa el estilo de cabello seleccionado
  //     await new Promise((resolve) => {
  //       maskImg.onload = () => {
  //         hairCtx.fillStyle = hairColorLayer.style.backgroundColor;
  //         hairCtx.globalCompositeOperation = "source-over";
  //         hairCtx.fillRect(0, 0, canvasWidth, canvasHeight);
  //         hairCtx.globalCompositeOperation = "destination-in";
  //         hairCtx.drawImage(maskImg, 0, 0, canvasWidth, canvasHeight);
  //         resolve();
  //       };
  //     });
  
  //     // Dibujar la forma del cabello
  //     const outlineImg = new Image();
  //     outlineImg.src = hairOutlineLayer.src;
  //     await new Promise((resolve) => {
  //       outlineImg.onload = () => {
  //         hairCtx.globalCompositeOperation = "source-over";
  //         hairCtx.drawImage(outlineImg, 0, 0, canvasWidth, canvasHeight);
  //         resolve();
  //       };
  //     });
  //   };
  
  //   // Renderizar los ojos con el estilo seleccionado
  //   const renderEyes = async (eyeStyle) => {
  //     const eyeColorLayer = document.getElementById("eye-color-layer");
  //     const eyeOutlineLayer = document.getElementById("eye-outline-layer");
  
  //     // Dibujar el color de los ojos
  //     const maskImg = new Image();
  //     maskImg.src = getMaskPath("eye-color-layer", null, null, eyeStyle); // Pasa el estilo de ojos seleccionado
  //     await new Promise((resolve) => {
  //       maskImg.onload = () => {
  //         eyesCtx.fillStyle = eyeColorLayer.style.backgroundColor;
  //         eyesCtx.globalCompositeOperation = "source-over";
  //         eyesCtx.fillRect(0, 0, canvasWidth, canvasHeight);
  //         eyesCtx.globalCompositeOperation = "destination-in";
  //         eyesCtx.drawImage(maskImg, 0, 0, canvasWidth, canvasHeight);
  //         resolve();
  //       };
  //     });
  
  //     // Dibujar la forma de los ojos
  //     const outlineImg = new Image();
  //     outlineImg.src = eyeOutlineLayer.src;
  //     await new Promise((resolve) => {
  //       outlineImg.onload = () => {
  //         eyesCtx.globalCompositeOperation = "source-over";
  //         eyesCtx.drawImage(outlineImg, 0, 0, canvasWidth, canvasHeight);
  //         resolve();
  //       };
  //     });
  //   };
  
  //   // Renderizar nariz y boca (directamente en el canvas final)
  //   const renderNoseAndMouth = async (ctx) => {
  //     const noseLayer = document.getElementById("nose-layer");
  //     const mouthLayer = document.getElementById("mouth-layer");
  
  //     // Dibujar la nariz
  //     const noseImg = new Image();
  //     noseImg.src = noseLayer.src;
  //     await new Promise((resolve) => {
  //       noseImg.onload = () => {
  //         ctx.globalCompositeOperation = "source-over";
  //         ctx.drawImage(noseImg, 0, 0, canvasWidth, canvasHeight);
  //         resolve();
  //       };
  //     });
  
  //     // Dibujar la boca
  //     const mouthImg = new Image();
  //     mouthImg.src = mouthLayer.src;
  //     await new Promise((resolve) => {
  //       mouthImg.onload = () => {
  //         ctx.globalCompositeOperation = "source-over";
  //         ctx.drawImage(mouthImg, 0, 0, canvasWidth, canvasHeight);
  //         resolve();
  //       };
  //     });
  //   };
  
  //   // Crear el canvas final
  //   const finalCanvas = document.createElement("canvas");
  //   finalCanvas.width = canvasWidth;
  //   finalCanvas.height = canvasHeight;
  //   const finalCtx = finalCanvas.getContext("2d");
  
  //   // Renderizar y combinar todas las partes
  //   const renderAndCombine = async () => {
  //     await renderFace(selectedFaceShape); // Pasa la forma seleccionada
  //     await renderHair(selectedHairStyle); // Pasa el estilo de cabello seleccionado
  //     await renderEyes(selectedEyeStyle); // Pasa el estilo de ojos seleccionado
  
  //     // Dibujar el rostro en el canvas final
  //     finalCtx.drawImage(faceCanvas, 0, 0, canvasWidth, canvasHeight);
  
  //     // Dibujar el cabello en el canvas final
  //     finalCtx.drawImage(hairCanvas, 0, 0, canvasWidth, canvasHeight);
  
  //     // Dibujar los ojos en el canvas final
  //     finalCtx.drawImage(eyesCanvas, 0, 0, canvasWidth, canvasHeight);
  
  //     // Dibujar nariz y boca en el canvas final
  //     await renderNoseAndMouth(finalCtx);
  
  //     // Descargar la imagen final
  //     finalCanvas.toBlob((blob) => {
  //       const link = document.createElement("a");
  //       link.href = URL.createObjectURL(blob);
  //       link.download = `${avatarName}.png`;
  //       link.click();
  //     }, "image/png");
  //   };
  
  //   // Iniciar el proceso de renderizado y combinación
  //   renderAndCombine();
  // }

  function getMaskPath(id, shape, hairStyle, eyeStyle, facialHairStyle, glassesStyle) {
    const masks = {
      "base-color-layer": `recursos/Bases/${shape}/color.png`,
      "hair-color-layer": `recursos/cabello/${hairStyle}/color.png`,
      "eye-color-layer": `recursos/ojos/${eyeStyle}/color.png`,
      "facialhair-color-layer": `recursos/vellofacial/${facialHairStyle}/color.png`, // Nueva máscara para vello facial
      "glasses-color-layer": `recursos/lentes/${glassesStyle}/color.png` // Nueva máscara para lentes
    };
    return masks[id];
  }



// Función para generar un avatar aleatorio
function generateRandomAvatar() {
  
  // Lista de nombres aleatorios para el avatar
const randomNames = [
  "Aurora", "Leo", "Maya", "Ethan", "Luna", "Max", "Zoe", "Liam", "Mia", "Noah",
  "Aria", "Elijah", "Ava", "Oliver", "Sophia", "Lucas", "Isabella", "Mason", "Charlotte", "Logan"
];

  // Seleccionar una forma de rostro aleatoria
  const faceShapes = ["estandar", "circulo", "cuadrado", "diamante"];
  const randomFaceShape = faceShapes[Math.floor(Math.random() * faceShapes.length)];
  document.querySelector(`input[name="face-shape"][value="${randomFaceShape}"]`).checked = true;
  changeFaceShape(randomFaceShape);

  // Seleccionar un color de rostro aleatorio
  const randomFaceColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  document.getElementById("face-color-picker").value = randomFaceColor;
  updateFaceColor();

  // Seleccionar un estilo de cabello aleatorio
  const hairStyles = ["ninguno", "corto", "largo", "desaliniado", "libro", "aleman", "bob"];
  const randomHairStyle = hairStyles[Math.floor(Math.random() * hairStyles.length)];
  document.querySelector(`input[name="hair-style"][value="${randomHairStyle}"]`).checked = true;
  changeHair(randomHairStyle);

  // Seleccionar un color de cabello aleatorio
  const randomHairColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  document.getElementById("hair-color-picker").value = randomHairColor;
  updateHairColor();

  // Seleccionar un estilo de vello facial aleatorio
  const facialHairStyles = ["ninguno", "barba", "chivo", "ducht", "mostacho"];
  const randomFacialHairStyle = facialHairStyles[Math.floor(Math.random() * facialHairStyles.length)];
  document.querySelector(`input[name="facialhair-style"][value="${randomFacialHairStyle}"]`).checked = true;
  changeFacialHair(randomFacialHairStyle);

  // Seleccionar un color de vello facial aleatorio
  const randomFacialHairColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  document.getElementById("facialhair-color-picker").value = randomFacialHairColor;
  updateFacialHairColor();

  // Seleccionar un estilo de lentes aleatorio
  const glassesStyles = ["ninguno", "estandar", "redondos", "rectangulares"];
  const randomGlassesStyle = glassesStyles[Math.floor(Math.random() * glassesStyles.length)];
  document.querySelector(`input[name="glasses-style"][value="${randomGlassesStyle}"]`).checked = true;
  changeGlasses(randomGlassesStyle);

  // Seleccionar un color de lentes aleatorio
  const randomGlassesColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  document.getElementById("glasses-color-picker").value = randomGlassesColor;
  updateGlassesColor();

  // Seleccionar un estilo de ojos aleatorio
  const eyeStyles = ["estandar", "feliz", "enojado", "sigilo"];
  const randomEyeStyle = eyeStyles[Math.floor(Math.random() * eyeStyles.length)];
  document.querySelector(`input[name="eye-style"][value="${randomEyeStyle}"]`).checked = true;
  changeEyes(randomEyeStyle);

  // Seleccionar un color de ojos aleatorio
  const randomEyeColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  document.getElementById("eye-color-picker").value = randomEyeColor;
  updateEyeColor();

  // Seleccionar un estilo de boca aleatorio
  const mouthStyles = ["estandar", "sonrisa", "triste", "asombro"];
  const randomMouthStyle = mouthStyles[Math.floor(Math.random() * mouthStyles.length)];
  document.querySelector(`input[name="mouth-style"][value="${randomMouthStyle}"]`).checked = true;
  changeMouth(randomMouthStyle);

  // Seleccionar un estilo de nariz aleatorio
  const noseStyles = ["corta", "media", "larga"];
  const randomNoseStyle = noseStyles[Math.floor(Math.random() * noseStyles.length)];
  document.querySelector(`input[name="nose-style"][value="${randomNoseStyle}"]`).checked = true;
  changeNose(randomNoseStyle);

  // Seleccionar un nombre aleatorio
  // const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
  document.getElementById("avatar-name").value = generarNombreAleatorio();
}

function generarNombreAleatorio() {
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  const consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  const silabas = ['ble', 'cla', 'fra', 'tru', 'pli', 'gro', 'tli', 'dro', 'zlu'];
  
  let longitud = Math.floor(Math.random() * 9) + 1; // Número entre 1 y 9
  let nombre = '';
  let usarVocal = Math.random() < 0.5; // Decide si empieza con vocal o consonante
  
  while (nombre.length < longitud) {
      if (usarVocal) {
          nombre += vocales[Math.floor(Math.random() * vocales.length)];
          usarVocal = false;
      } else {
          if (Math.random() < 0.3 && longitud - nombre.length > 2) { // 30% de probabilidad de usar sílaba
              let silaba = silabas[Math.floor(Math.random() * silabas.length)];
              if (nombre.length + silaba.length <= longitud) {
                  nombre += silaba;
              } else {
                  nombre += consonantes[Math.floor(Math.random() * consonantes.length)];
              }
          } else {
              nombre += consonantes[Math.floor(Math.random() * consonantes.length)];
          }
          usarVocal = true;
      }
  }
  
  return nombre.charAt(0).toUpperCase() + nombre.slice(1); // Capitalizar primera letra
}

  