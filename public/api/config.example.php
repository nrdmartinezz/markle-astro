<?php
/**
 * Copy to config.local.php for local testing, or to ~/private/markle-tile-mail.php
 * on the server (outside public_html). lib/mailer.php already looks for that path.
 * Never commit real credentials.
 *
 * Mail transport: uses PHP mail() by default (like WordPress). Set smtp_host, smtp_user,
 * and smtp_pass to switch to authenticated SMTP — useful when mail() deliverability is poor.
 */
return [
    'recaptcha_secret' => 'YOUR_RECAPTCHA_SECRET_KEY',
    'notify_to' => 'info@markletile.com',
    'from_email' => 'noreply@markletile.com',
    'from_name' => 'Markle Tile',
    'site_url' => 'https://markletile.com',
    'site_phone' => '(239) 490-3631',
    'site_phone_href' => '+12394903631',
    'timezone' => 'America/New_York',

    // Optional SMTP — leave blank to use PHP mail() on the host.
    'smtp_host' => '',
    'smtp_port' => 587,
    'smtp_user' => '',
    'smtp_pass' => '',

    'forms' => [
        'contact' => [
            'subject' => 'New quote request — Markle Tile',
            'notification' => 'notification-contact.html',
            // Autoreply disabled by default — set send_autoreply => true to enable.
        ],
    ],

    'recaptcha_min_score' => 0.5,
    'rate_limit_seconds' => 60,
    'rate_limit_max' => 5,
];
