---
layout: default
title: Contact
permalink: /contact/
---

<section class="page__content">
	<h1>Contact</h1>

	<p>Please use the form below to get in touch with any inquiries. I am currently not taking custom orders, but I continuously update the stock section as projects are completed. Check back periodically as you may find some extremely good deals on new or lightly used equipment.</p>

    <p>Please keep in mind I do this for fun, and do not guarantee perfection when it comes to boards or fins. I am constantly imroving my craft, so if you enjoy the equipment or have any constructive criticism, please reach out and tell me about it! I hope for this little arrangement to be a win-win for shaper and surfer.</p>

	<form id="contact-form" class="contact-form" method="post" data-endpoint="https://formspree.io/f/xbdepgoj">
		<div>
			<label for="cf-name">Name <span aria-hidden="true">*</span></label>
			<input id="cf-name" name="name" type="text" required>
		</div>

		<div>
			<label for="cf-email">Email <span aria-hidden="true">*</span></label>
			<input id="cf-email" name="email" type="email" required>
		</div>

		<div>
			<label for="cf-subject">Subject</label>
			<input id="cf-subject" name="subject" type="text">
		</div>

		<div>
			<label for="cf-message">Message <span aria-hidden="true">*</span></label>
			<textarea id="cf-message" name="message" rows="8" required></textarea>
		</div>

		<div>
			<button id="cf-submit" type="submit">Submit</button>
		</div>

		<div id="cf-status" role="status" aria-live="polite" style="margin-top:1rem"></div>
	</form>
</section>

<script src="{{ '/assets/js/contact.js' | relative_url }}"></script>

