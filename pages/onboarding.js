export default function Onboarding() {
  return (
    <div>
      <h1>Looks like you're new</h1>
      <form>
        <h2>New User</h2>
        <div >
          <div style={{ marginBottom: "12px" }}>
            <label> First Name: </label>
            <input name="firstname" required />
            <label> Last Name: </label>
            <input name="lastname" required />
          </div >
          <div style={{ marginBottom: "12px" }}>
            <label for="age_range">What's your age range? </label>
            <select id="age_range">
              <option value="0-10">0 - 10</option>
              <option value="10-15">10 - 15</option>
              <option value="15-20">15 - 20</option>
              <option value="20-25">20 - 25</option>
              <option value="25-30">25 - 30</option>
              <option value="30-35">30 - 35</option>
              <option value="35-40">35 - 40</option>
              <option value="40-45">40 - 45</option>
              <option value="45-50">45 - 50</option>
              <option value="50-55">50 - 55</option>
              <option value="60-65">60 - 65</option>
            </select>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <label for="coding_experience">What's your years of experience in technology? </label>
            <select id="coding_experience">
              <option value="0-1">0 - 2 </option>
              <option value="2-5">2 - 5 </option>
              <option value="5-10">5 - 10 </option>
              <option value="10+">10+</option>
            </select>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <label for="open_to_work">Are you open to work? </label>
            <label><b>Yes</b></label>
            <input type="radio" id="open_to_work_yes" name="open_to_work" value="yes" />
            <label for="no"><b>No</b></label>
            <input type="radio" id="open_to_work_no" name="open_to_work" value="no" />
          </div>
          <div>
            <label for="language_preference">What's your language preference? </label>
            <select id="language_preference">
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
              <option value="chinese">Chinese</option>
              <option value="punjabi">Punjabi</option>
            </select>
          </div>

          <div style={{ marginBottom: "12px" }}>
            <br />
            <label> Email: </label>
            <input name="email" label="Email" required />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label> Password </label>
            <input name="password" label="password" type="password" required />
          </div>
        </div>
        <p>Information will be used to match your profile with an experienced mentor</p>
        <button> Register Account </button>
      </form>
    </div >
  );
}
