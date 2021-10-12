<template>
  <div>
    <!-- imagen de encabezado -->
    <div class="page-heading contact-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">
              <h4>Contáctanos</h4>
              <h2>let’s get in touch</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- mapa y descripcion -->
    <div class="find-us">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <div class="section-heading">
              <h2>Nuestra Ubicación en Maps</h2>
            </div>
          </div>
          <div class="col-md-8">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31806.37906354164!2d-75.73127110105254!3d4.804817091562671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388748eb56c1fd%3A0x95b39410f9f1dfbc!2sPereira%2C%20Risaralda!5e0!3m2!1ses!2sco!4v1632003768351!5m2!1ses!2sco"
                width="100%"
                height="330px"
                frameborder="0"
                style="border: 0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="col-md-4">
            <div class="left-content">
              <h4>About our office</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                voluptate nihil eumester consectetur similiqu consectetur.<br /><br />Lorem
                ipsum dolor sit amet, consectetur adipisic elit. Et,
                consequuntur, modi mollitia corporis ipsa voluptate corrupti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- formulario de mensaje -->
    <div class="send-message">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <div class="section-heading">
              <h2>Envíenos un mensaje</h2>
            </div>
          </div>
          <div class="col-md-8">
            <div class="contact-form">
              <form id="contact" action="" method="post">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nombre"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        class="form-control"
                        id="email"
                        placeholder="E-Mail"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="subject"
                        type="text"
                        class="form-control"
                        id="subject"
                        placeholder="Asunto"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows="6"
                        class="form-control"
                        id="message"
                        placeholder="Tu Mensage"
                        required=""
                      ></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        class="filled-button"
                      >
                        Enviar
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contact-heading {
  background-image: url(../assets/images/slide-carne-1.jpg);
}
.page-heading {
  padding: 210px 0px 130px 0px;
  text-align: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.page-heading .text-content h4 {
  color: #f33f3f;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 15px;
}
.page-heading .text-content h2 {
  color: #fff;
  font-size: 62px;
  text-transform: uppercase;
  letter-spacing: 5px;
}
.col-md-10 {
  flex: 0 0 auto;
  width: 100%;
  padding: 50px;
}
.col-md-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
  padding: 40px;
}
.col-md-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
  padding: 40px;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: justify;
}
.contact-form input {
  font-size: 14px;
  width: 100%;
  height: 44px;
  display: inline-block;
  line-height: 42px;
  border: 1px solid #eee;
  border-radius: 0px;
  margin-bottom: 30px;
}
.contact-form input:focus {
  box-shadow: none;
  border: 1px solid #eee;
}
.contact-form textarea {
  font-size: 14px;
  width: 100%;
  min-width: 100%;
  min-height: 120px;
  height: 120px;
  max-height: 180px;
  border: 1px solid #eee;
  border-radius: 0px;
  margin-bottom: 30px;
}
.contact-form textarea:focus {
  box-shadow: none;
  border: 1px solid #eee;
}
.contact-form button.filled-button {
  background-color: #f33f3f;
  color: #fff;
  font-size: 14px;
  text-transform: capitalize;
  font-weight: 300;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  transition: all 0.3s;
  border: none;
  outline: none;
  cursor: pointer;
}
.contact-form button.filled-button:hover {
  background-color: #121212;
  color: #fff;
}
.accordion {
  margin-left: 30px;
}
.accordion a {
  cursor: pointer;
  font-size: 17px;
  color: #1a6692 !important;
  margin-bottom: 20px;
  transition: all 0.3s;
}
.accordion a:hover {
  color: #f33f3f !important;
}
.accordion a.active {
  color: #f33f3f !important;
}
</style>