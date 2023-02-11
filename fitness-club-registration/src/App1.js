import React, { useState } from "react";

// import Prompt from "prompt";
const FitnessClubRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [memberList, setMemberList] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMemberList([...memberList, formData]);
    setShowMessage(true);
    setFormData({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div>
      <h1>Fitness Club Registration</h1>
      <div className="container">
        <div className="card">
          <div className="card-image"></div>
          <div>
            <form
              className="card-form"
              onSubmit={handleSubmit}
              autocomplete="off"
            >
              <div className="input">
                <label className="input-label" htmlFor="name">
                  Name:
                </label>
                <input
                  className="input-field"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label className="input-label" htmlFor="email">
                  Email:
                </label>
                <input
                  className="input-field"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label className="input-label" htmlFor="phone">
                  Phone Number:
                </label>
                <input
                  className="input-field"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label className="input-label" htmlFor="address">
                  Address:
                </label>
                <input
                  className="input-field"
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="action">
                <button class="action-button" type="submit">
                  Add Member
                </button>
              </div>
            </form>
            {showMessage &&
              prompt("User added successfully!", "Thankyou for registration")}
            {/* <Prompt when={showMessage} message="User added successfully!" /> */}
          </div>
        </div>
      </div>

      <div className="action">
        <button class="action-button1" onClick={() => setShowMessage(false)}>
          View Member List
        </button>
      </div>
      {memberList.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {memberList.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FitnessClubRegistration;
