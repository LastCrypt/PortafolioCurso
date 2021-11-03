function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'Json/estudiantes.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var datos = JSON.parse(this.responseText);
            
            var datosHtml = ``

            for (let item of datos) {
                datosHtml += `
                <div class="ficha">
                    <div class="encabezado-ficha">
                        <div class="nombre-estudiante">
                            <h2>
                                ${item.nombre}
                            </h2>
                            </div>
                            <div class="enlaces">
                            <a href="${item.github}"><i class='bx bxl-github bx-md' ></i>Github</a>
                            <a href="${item.neocities}"><i class='bx bxl-chrome bx-md'></i>Neocities</a>
                            <section class="textSmall">
                                <a href="#"><i class='bx bx-mail-send bx-md'></i>${item.emailS}</a>
                            </section>
                            <section class="textBig">
                                <a href="#"><i class='bx bx-mail-send bx-md'></i>${item.email}</a>
                            </section>
                            <a href="#"><i class='bx bxl-whatsapp bx-md'></i>${item.telefono}</a>
                            </div>
                            <div class="fotografia">
                            <img src="${item.imagen}" alt="fotografia">
                            </div>
                        </div>
                        <div class="actividades-ficha">
                            <div class="titulo-actividades">
                            <h3>
                                Actividades
                            </h3>
                            </div>
                            <div class="encabezado-actividades">
                            <div class="item">
                                <p>
                                Nro.
                                </p>
                            </div>
                            <div class="nombre">
                                <p>
                                Actividad
                                </p>
                            </div>
                            <div class="estadouiux">
                                <p>
                                %UI/UX
                                </p>
                            </div>
                            <div class="estadodev">
                                <P>
                                %Dev
                                </P>
                            </div>
                            </div>
                            <div class="estado-actividades">
                            <div class="nro">
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                            </div>
                            <div class="enlace">
                                <a href="${item.actividades[0].linkA}">${item.actividades[0].actividad}</a>
                                <a href="${item.actividades[1].linkA}">${item.actividades[1].actividad}</a>
                                <a href="${item.actividades[2].linkA}">${item.actividades[2].actividad}</a>
                                <a href="${item.actividades[3].linkA}">${item.actividades[3].actividad}</a>
                                <a href="${item.actividades[4].linkA}">${item.actividades[4].actividad}</a>
                            </div>
                            <div class="porcentajeuiux">
                                <p>${item.actividades[0].estadouiux}</p>
                                <p>${item.actividades[1].estadouiux}</p>
                                <p>${item.actividades[2].estadouiux}</p>
                                <p>${item.actividades[3].estadouiux}</p>
                                <p>${item.actividades[4].estadouiux}</p>
                            </div>
                            <div class="porcentajedev">
                                <p>${item.actividades[0].estadotecnico}</p>
                                <p>${item.actividades[1].estadotecnico}</p>
                                <p>${item.actividades[2].estadotecnico}</p>
                                <p>${item.actividades[3].estadotecnico}</p>
                                <p>${item.actividades[4].estadotecnico}</p>
                            </div>
                            </div>
                        </div>
                        <div class="estados-ficha">
                            <div class="estadohtml">
                            <p>${item.valoraciones.valhtml} html</p>
                            </div>
                            <div class="estadocss">
                            <p>${item.valoraciones.valcss} css</p>
                            </div>
                            <div class="estadojs">
                            <p>${item.valoraciones.valjs} js</p>
                            </div>
                            <div class="estadoui">
                            <p>${item.valoraciones.valui} UI</p>
                            </div>
                            <div class="estadoux">
                            <p>${item.valoraciones.valux} UX</p>
                            </div>
                            <div class="total">
                            <p>${item.calificacion} TOTAL</p>
                            </div>
                        </div>
                    </div>
                </div>

                `
                var result = document.querySelector('#content');
                result.innerHTML = datosHtml;
            }

            
        }
    }
}

traerDatos();