<?php
// Copy outside the repository AND every public document root. See LARANET-CONFIG.md.
return [
    'mode' => 'phantom', 'phantom_auth_mode' => 'get-query-lab',
    'phantom_url' => '', // Confirmed HTTPS endpoint; never downgrade TLS.
    'api_user' => '', 'api_pass' => '',
    'customer_id_field' => null, // ID suggested by Botmaker; validate types/credentials first.
    'login_users' => [], 'allowed_idas' => [],
    'idle_seconds' => 900, 'max_seconds' => 28800,
    'timeout_seconds' => 10, 'connect_timeout_seconds' => 4,
    'customer_path' => [], 'balance_path' => null, // Legacy inspectors only.
    'profile_fields' => ['name'=>null,'address'=>null,'plan'=>null,'city'=>null,'email'=>null,'phone'=>null],
    'ca_file' => null,
    'service_product_fields' => [], // Unknown -> null, never confirmed empty.
    'service_catalog' => [], 'commercial_catalog' => [],
    'product_rules' => ['ignored_labels'=>[], 'hidden_iptv_base'=>false, 'iptv_implies_sensa'=>false],
    'speedtest_server' => null,
    'wifi' => ['enabled'=>false,'model_field'=>null,'models'=>[],'dual_band_models'=>[], 'ssid_prefix'=>null],
    'soap' => ['read_enabled'=>false,'lab_ida'=>null,'url'=>null,'profile_names'=>[],'profile_ids'=>[]],
    'upgrade' => ['enabled'=>false,'lab_ida'=>null,'plans'=>[]],
    'tickets' => ['enabled'=>false,'lab_ida'=>null,'clear_response'=>null,'products'=>[]],
    'notifications' => ['email_enabled'=>false,'botmaker_enabled'=>false],
    'siro' => [
        'enabled'=>false, 'lab_ida'=>null, 'user'=>'', 'password'=>'',
        'return_base'=>'https://mi.laranet.com.ar',
        'company_number'=>null, // Validate agreement against invoice SIRO_CE.
        'receipt_start'=>null, 'receipt_end'=>null, // Reserve a range before activation.
    ],
    'phantom_posting' => ['enabled'=>false,'lab_ida'=>null,'crm_url'=>'','origin'=>'SIRO Mi LARANET'],
];
