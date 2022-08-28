import React from "react";

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    console.log(formData);
  };

  return (
    <section className="form">
      <div className="form-image">
        <div className="form-context container">
          <form onSubmit={handleSubmit}>
            <h2>Kursa yazıl</h2>
            <div className="form-group">
              <div className="form-label">
                <label htmlFor="name">
                  Ad, Soyad <span>*</span>
                </label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-label">
                <label htmlFor="email">
                  E-poçt <span>*</span>
                </label>
                <input type="email" name="email" id="email" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-label">
                <label htmlFor="tel">
                  Əlaqə nömrəsi <span>*</span>
                </label>
                <input type="tel" name="tel" id="tel" />
              </div>
              <div className="form-label">
                <label htmlFor="company">
                  Şirkət <span>*</span>
                </label>
                <input type="text" name="company" id="company" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-label">
                <label htmlFor="message">
                  Mesaj <span>*</span>
                </label>
                <textarea name="message" id="message"></textarea>
              </div>
            </div>
            <button type="submit">Göndər</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
