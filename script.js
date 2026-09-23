const recipient = "care@gujaratmetrorail.com";

const subject =
  "Request to Make the Third (Main) Exit Gate of Paldi Metro Station Towards Jalaram Mandir side Operational at the Earliest.";

const body = `To,
The Respected Sir/Madam,
Concerned Authority,
Ahmedabad Metro Rail Project,
GMRCL.

I am a regular passenger of Ahmedabad Metro and a resident of the Paldi/Kalgi Char Rasta area. Through this email, I would like to draw your kind attention to the serious inconvenience caused to commuters due to the long-standing closure of the third (main) exit gate of Paldi Metro Station, located towards Jalaram Mandir side and Jain Society.

At present, two exits of Paldi Metro Station are operational, while the third and most convenient main exit towards Jalaram Mandir and Jain Society has remained closed for a long time. As a result, commuters are facing the following difficulties:

1. Unnecessary Travel Delays and Longer Routes

If this exit is operational, commuters can reach Paldi Bus Station (AMTS/BRTS) much more conveniently. However, due to its closure, passengers are forced to take a longer route, resulting in unnecessary wastage of time and energy.

2. Traffic and Passenger Safety Concerns

Commuters using the other exits have to take a longer route and cross busy roads. This can be particularly difficult and potentially dangerous for senior citizens, women, children, and persons with disabilities.

3. Lack of Direct Connectivity to Jain Society and Surrounding Areas

The exit towards Jalaram Mandir provides direct and convenient connectivity between the metro station and Jain Society, along with several surrounding residential areas. Its continued closure is causing considerable inconvenience to local residents as well.

The primary objective of metro transportation is to provide citizens with fast, safe, and convenient travel. Keeping such an important exit closed for an extended period adversely affects commuter convenience and the overall effectiveness of public transportation.

Therefore, we sincerely request the concerned authorities to:

1. Make the third (main) exit of Paldi Metro Station, towards Jalaram Mandir and Jain Society, operational at the earliest.

2. If the exit has been closed due to any technical, administrative, or safety-related reasons, kindly provide clear information regarding the same to commuters.

3. If there is likely to be a delay in reopening the exit, kindly announce the expected timeline for making it operational.

This matter is not limited to individual convenience; it concerns the daily travel, accessibility, and safety of numerous citizens and regular metro commuters in the Paldi area.

We sincerely hope that you will consider this request seriously in the public interest and take the necessary steps to reopen this main exit at the earliest.

We look forward to your positive response and prompt action.

Thank you for your time and consideration.

Yours faithfully,`;

const sendButton = document.getElementById("sendEmailBtn");
const messagePreview = document.getElementById("messagePreview");

messagePreview.textContent = `To: ${recipient}

Subject: ${subject}

${body}`;

sendButton.addEventListener("click", () => {
  const mailtoUrl =
    `mailto:${recipient}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
});
