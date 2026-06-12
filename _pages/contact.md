---
layout: default
title: Contact
permalink: /contact/
---

<section class="page__content">
	<h1>Contact</h1>

	<p>Please use the form below to get in touch. Replace this blurb with your own informational text about response times, privacy, or what to include.</p>

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

	<p class="muted">Note: Replace the form endpoint in the form's <code>data-endpoint</code> attribute with your Formspree form URL (see Formspree.io). The page uses client-side JavaScript to sanitize inputs and POST the form data so Formspree can forward it to your email.</p>
</section>

<script src="{{ '/assets/js/contact.js' | relative_url }}"></script>

