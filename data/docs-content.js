/* ==========================================================================
   Comprehensive Documentation Content Repository (Multilingual: EN, AR, ZH)
   J&T Express Shopify Plugin – Multilingual Interactive Help Center
   ========================================================================== */

window.JNT_DOCS_DATA = {
  // English Content
  en: [
    {
      id: 'introduction',
      number: '01',
      shortTitle: 'Introduction & Overview',
      title: 'Introduction & Plugin Overview',
      subtitle: 'Overview of J&T Express Egypt logistics integration for Shopify merchants.',
      badge: 'Core Concept',
      contentHtml: `
        <p>The <strong>J&T Express Shopify Plugin</strong> is an official enterprise logistics integration designed specifically for Shopify merchants operating in Egypt. It seamlessly connects your Shopify store with the J&T Express domestic shipping infrastructure, enabling automated order synchronization, instant waybill generation, batch label printing, and end-to-end package tracking directly within your Shopify Admin.</p>

        <div class="callout info">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <div class="callout-title">Enterprise Logistics Integration</div>
            <div class="callout-text">Rather than redirecting merchants to external portals, the J&T plugin functions entirely inside the native Shopify Admin interface as an embedded app, preserving single-sign-on workflow and eliminating context switching.</div>
          </div>
        </div>

        <h3 style="margin: 20px 0 10px;">Key Plugin Highlights & Advantages</h3>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-card-title">🔗 VIP Direct Link</div>
            <div class="feature-card-desc">Authenticates directly against J&T VIP account databases using your Customer Code and password—no manual Shopify API keys, secret credentials, or OAuth setup required.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">⚡ Dual-Mode Synchronization</div>
            <div class="feature-card-desc">Supports both background automatic synchronization for new orders and instant manual sync for modified orders, automatically tagging synchronized orders in Shopify with <span class="ui-term">J&T_synced</span>.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">📦 Complete Lifecycle Management</div>
            <div class="feature-card-desc">Two dedicated workspaces: <span class="ui-term">Orders</span> for pre-dispatch editing, validation, and label printing; <span class="ui-term">Shipments</span> for live courier scan history and delivery tracking.</div>
          </div>
        </div>
      `,
      screenshots: ['scr-overview', 'scr-overview-guide']
    },

    {
      id: 'login-linking',
      number: '02',
      shortTitle: 'Login & Linking',
      title: 'Login & Account Linking',
      subtitle: 'How to access the plugin and connect your J&T VIP account without manual API keys.',
      badge: 'Authentication',
      contentHtml: `
        <p>Accessing the plugin and linking your Shopify store to your J&T Express shipping account is completely automated and requires no manual API configuration.</p>

        <h3 style="margin: 20px 0 10px;">Step-by-Step Login Instructions</h3>
        <ol class="step-list">
          <li class="step-list-item">
            <div class="step-list-num">1</div>
            <div class="step-list-content">
              <h4>Open Shopify Admin</h4>
              <p>Log in to your Shopify store administration portal (<span class="ui-term">admin.shopify.com</span>).</p>
            </div>
          </li>
          <li class="step-list-item">
            <div class="step-list-num">2</div>
            <div class="step-list-content">
              <h4>Navigate to Apps</h4>
              <p>In the Shopify left navigation panel, click <span class="ui-term">Apps</span> and select <span class="ui-term">J&T</span>.</p>
            </div>
          </li>
          <li class="step-list-item">
            <div class="step-list-num">3</div>
            <div class="step-list-content">
              <h4>Embedded Plugin Launch</h4>
              <p>The plugin opens directly inside your Shopify workspace without redirecting you to an external browser tab.</p>
            </div>
          </li>
          <li class="step-list-item">
            <div class="step-list-num">4</div>
            <div class="step-list-content">
              <h4>Enter J&T VIP Credentials</h4>
              <p>Enter your <strong>J&T Customer Code</strong> (e.g., <span class="ui-term">J0086025775</span>) in the username field, and your existing <strong>J&T VIP account password</strong>.</p>
            </div>
          </li>
          <li class="step-list-item">
            <div class="step-list-num">5</div>
            <div class="step-list-content">
              <h4>Automatic Store Linking</h4>
              <p>Upon successful authentication, your Shopify store domain is instantly and securely linked to your J&T VIP customer account.</p>
            </div>
          </li>
        </ol>

        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <div class="callout-title">Critical Security & Setup Rule</div>
            <div class="callout-text">You do <strong>not</strong> need to register a new account inside Shopify, nor copy and paste manual Shopify Private App API Keys or webhook secret tokens. Simply enter your existing J&T VIP credentials. If you do not yet possess a J&T Customer Code, contact your local J&T Express Egypt account manager to set up a VIP commercial contract.</div>
          </div>
        </div>
      `,
      screenshots: ['scr-settings-profile', 'scr-overview-guide']
    },

    {
      id: 'overview',
      number: '03',
      shortTitle: 'Overview (Dashboard)',
      title: 'Overview Dashboard & Quick Tools',
      subtitle: 'Tracking Query for up to 100 waybills, Quick Actions, and Getting Started guide.',
      badge: 'Dashboard',
      contentHtml: `
        <p>The <span class="ui-term">Overview</span> tab serves as the merchant control center, greeting you with the J&T Express Egypt banner (<em>"Connecting Egypt, Delivering the Future"</em>) and providing essential day-to-day logistics tools.</p>

        <h3 style="margin: 22px 0 10px;">1. Bulk Tracking Query (Up to 100 Waybills)</h3>
        <p>The <strong>Tracking Query</strong> bar allows merchants and customer support teams to look up up to 100 tracking numbers in a single query. Enter or paste waybill numbers separated by commas or spaces and click the red <span class="ui-term primary">Search</span> button to display live shipping updates.</p>

        <h3 style="margin: 22px 0 10px;">2. Quick Actions Cards</h3>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-card-title">📝 Feedback & Survey</div>
            <div class="feature-card-desc">Clicking <span class="ui-term">Give Feedback ↗</span> opens an in-app survey modal where you can share feature requests, performance feedback, or ideas directly with the J&T product development team (up to 500 characters).</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">📖 Getting Started Guide</div>
            <div class="feature-card-desc">Clicking <span class="ui-term">Read Guide ↗</span> opens a quick 4-step modal explaining VIP account connection, order synchronization, sending orders for delivery, and shipment tracking.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">👑 J&T VIP Access</div>
            <div class="feature-card-desc">Clicking <span class="ui-term">Visit VIP ↗</span> takes commercial account holders directly to the advanced J&T VIP portal for priority customer support, bulk invoicing, and financial reconciliation.</div>
          </div>
        </div>
      `,
      screenshots: ['scr-overview', 'scr-overview-feedback', 'scr-overview-guide']
    },

    {
      id: 'orders',
      number: '04',
      shortTitle: 'Orders Management',
      title: 'Orders Management & Delivery',
      subtitle: 'Synchronizing, editing addresses, bulk dispatch, printing waybills, and column customization.',
      badge: 'Order Fulfillment',
      contentHtml: `
        <p>The <span class="ui-term">Orders</span> tab is the primary fulfillment hub where synced Shopify orders are prepared, edited, dispatched to J&T Express, and printed.</p>

        <h3 style="margin: 22px 0 10px;">Toolbar Actions</h3>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-card-title"><span class="ui-term primary">Deliver with J&T</span></div>
            <div class="feature-card-desc">Dispatches selected orders to J&T logistics. Active only when one or more orders are checked. Once clicked, a unique J&T tracking number is generated (e.g. <span class="ui-term">UEG088903302756</span>) and the status updates to <span class="status-pill placed">Placed</span>.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title"><span class="ui-term">Print waybill</span></div>
            <div class="feature-card-desc">Generates official printable J&T shipping labels (thermal format). Only enabled for orders that have a generated tracking number (<span class="status-pill placed">Placed</span>). Updates label status to <span class="status-pill placed">Printed</span>.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title"><span class="ui-term">Export</span> & <span class="ui-term">Download center</span></div>
            <div class="feature-card-desc">Exports selected order data to Excel. Once queued, click <span class="ui-term">Download center</span> to retrieve and download the generated spreadsheet file.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title"><span class="ui-term">Sync your orders</span></div>
            <div class="feature-card-desc">Manually pulls newly placed or edited Shopify orders into the plugin table. Always click this after editing an order in Shopify.</div>
          </div>
        </div>

        <h3 style="margin: 24px 0 10px;">Filtering & Search Capabilities</h3>
        <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
          <li><strong>Number search:</strong> Search by Shopify Order ID (e.g., <span class="ui-term">#1058</span>) or Waybill Tracking number.</li>
          <li><strong>Order status:</strong> Filter by <span class="status-pill synced">Synced</span>, <span class="status-pill placed">Placed</span>, or <span class="status-pill cancelled">Cancelled</span>.</li>
          <li><strong>Label status:</strong> Filter by <span class="status-pill placed">Printed</span> or <span class="status-pill synced">Not printed</span>.</li>
          <li><strong>Confirm status:</strong> Filter by <span class="status-pill placed">Sent</span>, <span class="status-pill failed">Send failed</span>, <span class="status-pill synced">Order confirmed</span>, <span class="status-pill synced">Unconfirmed</span>, or <span class="status-pill cancelled">Cancel order</span>.</li>
          <li><strong>Created at:</strong> Filter orders within a customized start and end calendar date range.</li>
        </ul>

        <h3 style="margin: 24px 0 10px;">Row-Level Tools & Modals</h3>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-card-title">✏️ Edit Order Modal</div>
            <div class="feature-card-desc">Clicking the pencil icon opens a comprehensive form to update Sender details, Receiver details (<span class="ui-term">Name</span>, <span class="ui-term">Phone</span>, <span class="ui-term">Province</span>, <span class="ui-term">City</span>, <span class="ui-term">Area</span>, <span class="ui-term">Street</span>), <span class="ui-term">Item Weight (kg)</span>, and Notes. Essential for resolving <span class="status-pill failed">Send failed</span> errors.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">🔍 Picking Details (View)</div>
            <div class="feature-card-desc">Under the <span class="ui-term">View product details</span> column, clicking <span class="ui-term">View</span> opens a breakdown showing Item Name, Quantity, and SKU for warehouse staff.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">⋮ Three-Dots (...) Menu</div>
            <div class="feature-card-desc">Contains row-specific actions: <span class="ui-term">View details</span> (read-only summary), <span class="ui-term">Reorder</span>, <span class="ui-term">Edit notes</span>, and <span class="ui-term">Cancel order</span>.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">▤ Customize Columns</div>
            <div class="feature-card-desc">Clicking the column icon on the far right allows toggling visibility and drag-to-reorder for 15 table columns (Order ID, Tracking no., Status, Source, Customer, COD, Tags, Confirm status, Notes, etc.).</div>
          </div>
        </div>

        <div class="callout danger">
          <div class="callout-icon">🚨</div>
          <div class="callout-body">
            <div class="callout-title">Critical Order Modification Notice</div>
            <div class="callout-text">If an order's address, phone, or items are modified in Shopify Admin after initial sync, the changes will <strong>NOT</strong> automatically reflect in the J&T plugin. You <strong>MUST</strong> click <span class="ui-term">Sync your orders</span> on the Orders tab to fetch the updated data.</div>
          </div>
        </div>
      `,
      screenshots: [
        'scr-orders-main',
        'scr-orders-bulk',
        'scr-orders-filter',
        'scr-orders-edit',
        'scr-orders-items',
        'scr-orders-details',
        'scr-orders-edit-note',
        'scr-orders-columns',
        'scr-orders-download',
        'scr-shopify-orders'
      ]
    },

    {
      id: 'shipments',
      number: '05',
      shortTitle: 'Shipments & Tracking',
      title: 'Shipments & Real-Time Tracking',
      subtitle: 'Monitoring active courier parcels, tracking details timeline, and scan event history.',
      badge: 'Logistics Tracking',
      contentHtml: `
        <p>The <span class="ui-term">Shipments</span> tab displays orders that have been successfully dispatched to J&T Express and assigned an active waybill number. It tracks real-world logistics progress from warehouse pickup to final customer delivery.</p>

        <h3 style="margin: 22px 0 10px;">Shipment Table Overview</h3>
        <p>The table provides essential logistics parameters:</p>
        <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
          <li><strong>Order ID:</strong> Shopify reference ID (e.g., <span class="ui-term">EGOPEN-1754066768</span> or <span class="ui-term">#1055</span>).</li>
          <li><strong>Tracking no.:</strong> Official J&T Express tracking code with an instant copy button (<span class="ui-term">UEG088903478193</span>).</li>
          <li><strong>Status:</strong> Live delivery state badge.</li>
          <li><strong>Customer & Phone:</strong> Recipient contact information.</li>
          <li><strong>Payment:</strong> Payment type (Cash on Delivery <span class="ui-term">COD</span> with amount in EGP, or Prepaid).</li>
          <li><strong>Shipping address:</strong> Destination address details.</li>
          <li><strong>Actions:</strong> Click <span class="ui-term">View tracking</span> to inspect the chronological scan history.</li>
        </ul>

        <h3 style="margin: 22px 0 10px;">Recognized Shipment Statuses</h3>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-card-title"><span class="status-pill synced">Picked up</span></div>
            <div class="feature-card-desc">The courier has collected the package from your warehouse or assigned pickup branch.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title"><span class="status-pill transit">In transit</span></div>
            <div class="feature-card-desc">Package is moving through J&T sorting centers or trunk line transportation.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title"><span class="status-pill delivery">Out for delivery</span></div>
            <div class="feature-card-desc">Package is loaded on a courier vehicle and dispatched for delivery to the recipient today.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title"><span class="status-pill delivered">Delivered</span></div>
            <div class="feature-card-desc">Package was successfully delivered to the customer (and COD collected if applicable).</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title"><span class="status-pill cancelled">Returning / Returned</span></div>
            <div class="feature-card-desc">Delivery was unsuccessful (e.g. customer refused or unreachable) and is being returned to the merchant.</div>
          </div>
        </div>

        <h3 style="margin: 24px 0 10px;">Tracking Details Modal (Scan History)</h3>
        <p>Clicking <span class="ui-term">View tracking</span> opens a chronological timeline modal showing every physical scan event recorded by J&T handheld terminals:</p>
        <ol class="step-list">
          <li class="step-list-item">
            <div class="step-list-num">1</div>
            <div class="step-list-content">
              <h4>Pickup scan</h4>
              <p>Initial receipt scan by the J&T collection courier with exact date and timestamp.</p>
            </div>
          </li>
          <li class="step-list-item">
            <div class="step-list-num">2</div>
            <div class="step-list-content">
              <h4>Sending scan & Arrival Scan</h4>
              <p>Dispatched from origin hub and arrived at destination sorting facility.</p>
            </div>
          </li>
          <li class="step-list-item">
            <div class="step-list-num">3</div>
            <div class="step-list-content">
              <h4>Delivery scan (Latest)</h4>
              <p>Marked with a bright red <span class="ui-term primary">Latest</span> badge showing courier assignment or final delivery proof.</p>
            </div>
          </li>
        </ol>
      `,
      screenshots: [
        'scr-shipments-main',
        'scr-shipments-filters',
        'scr-shipments-search',
        'scr-shipments-tracking'
      ]
    },

    {
      id: 'settings',
      number: '06',
      shortTitle: 'Settings & Auto Sync',
      title: 'Settings & Configurations',
      subtitle: 'Profile, assigned branch HQ, Auto Syncing rules by province, and address books.',
      badge: 'Configuration',
      contentHtml: `
        <p>The <span class="ui-term">Settings</span> tab allows merchants to manage their linked account profile, configure automated order synchronization rules, and maintain reusable sender/receiver address books.</p>

        <h3 style="margin: 22px 0 10px;">Tab 1: Profile</h3>
        <p>Displays two side-by-side informational cards:</p>
        <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
          <li><strong>Merchant Card:</strong> Merchant Name, Customer Code (<span class="ui-term">J0086025775</span>), Contact Phone, Registered Email, and linked Shopify Store URL (<span class="ui-term">yourstore.myshopify.com</span>).</li>
          <li><strong>Assigned Branch Card:</strong> Assigned J&T pickup station details (Branch Code <span class="ui-term">888888</span>, Branch City, Branch Phone, and Station Address).</li>
          <li><strong>Unbind Account:</strong> Clicking <span class="ui-term">Unbind account</span> disconnects the store from the current J&T VIP account.</li>
        </ul>

        <h3 style="margin: 22px 0 10px;">Tab 2: Auto Syncing</h3>
        <p>Automates order import from Shopify into J&T Express without manual intervention:</p>
        <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
          <li><strong>Enable Switch:</strong> Check <span class="ui-term">Automatically synchronize orders with J&T logistics for shipment</span>.</li>
          <li><strong>Province Selection:</strong> Under <span class="ui-term">Recipient provinces allowed for auto sync</span>:
            <ul style="margin-top: 6px;">
              <li><strong>No provinces selected:</strong> Newly placed orders for <em>all</em> Egyptian governorates will be auto-synced.</li>
              <li><strong>Specific provinces selected (e.g. Giza, Alexandria, Gharbia):</strong> Only newly placed orders delivering to the selected provinces will auto-sync.</li>
            </ul>
          </li>
          <li><strong>Save changes:</strong> Remember to click the red <span class="ui-term primary">Save changes</span> button at the top right.</li>
        </ul>

        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <div class="callout-title">Auto Cancellation Sync Status: Under Development</div>
            <div class="callout-text">The setting <em>"Automatically Sync Order Cancellation Information to J&T"</em> is currently <strong>under development and not fully available</strong>. Even if checked, cancellations inside Shopify do not automatically cancel J&T waybills. You must handle cancellations manually in both platforms.</div>
          </div>
        </div>

        <h3 style="margin: 22px 0 10px;">Tab 3: Addresses</h3>
        <p>Manage your address book for recurring logistics operations:</p>
        <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
          <li>Toggle between <span class="ui-term">Sender address</span> and <span class="ui-term">Receiver address</span>.</li>
          <li>Click <span class="ui-term">+ Add address</span> to register a new location (Name, Phone, Province, City, Area, Street, Address, and <span class="ui-term">Set as default address</span>).</li>
          <li>Use table actions to <span class="ui-term">Set default</span>, <span class="ui-term">Edit</span>, or <span class="ui-term">Delete</span> existing addresses.</li>
        </ul>
      `,
      screenshots: [
        'scr-settings-profile',
        'scr-settings-autosync',
        'scr-settings-provinces',
        'scr-settings-addresses',
        'scr-settings-addresses-add'
      ]
    },

    {
      id: 'workflow',
      number: '07',
      shortTitle: 'Interactive Workflow',
      title: 'Complete Merchant Workflow',
      subtitle: 'Interactive 8-stage visual fulfillment journey from app launch to final delivery.',
      badge: 'Interactive Flow',
      contentHtml: `
        <p>The standard fulfillment lifecycle in the J&T Express Shopify Plugin consists of eight sequential phases. Use the interactive stepper below to inspect required actions, field validations, and matching interface screenshots for each phase.</p>

        <div id="interactive-workflow-mount">
          <!-- Rendered dynamically by js/app.js -->
        </div>
      `,
      screenshots: [
        'scr-overview-guide',
        'scr-settings-profile',
        'scr-orders-main',
        'scr-orders-edit',
        'scr-orders-bulk',
        'scr-shipments-tracking'
      ]
    },

    {
      id: 'troubleshooting-faq',
      number: '08',
      shortTitle: 'Troubleshooting & FAQs',
      title: 'Troubleshooting & FAQs',
      subtitle: 'Step-by-step diagnostic procedures for common operational situations.',
      badge: 'Knowledge Base',
      contentHtml: `
        <p>Expand any topic below for verified diagnostic steps directly based on the plugin's real behavior:</p>

        <div class="accordion-list">
          <div class="accordion-item" data-faq="print-fail">
            <button class="accordion-trigger">
              <span>Why is the "Print waybill" button grayed out or not working?</span>
              <span class="accordion-chevron">▼</span>
            </button>
            <div class="accordion-content">
              <p>The <span class="ui-term">Print waybill</span> button requires two conditions:</p>
              <ol style="margin: 8px 0 8px 20px;">
                <li>The order must have been selected using its row checkbox.</li>
                <li>The order must already be dispatched to J&T and have a status of <span class="status-pill placed">Placed</span> with a generated waybill number (e.g. <span class="ui-term">UEG...</span>).</li>
              </ol>
              <p>If the order status is still <span class="status-pill synced">Synced</span>, select the order and click <span class="ui-term primary">Deliver with J&T</span> first. Once the tracking number appears, print your waybill.</p>
            </div>
          </div>

          <div class="accordion-item" data-faq="send-failed">
            <button class="accordion-trigger">
              <span>How do I fix a "Send failed" confirm status?</span>
              <span class="accordion-chevron">▼</span>
            </button>
            <div class="accordion-content">
              <p>An order displays <span class="status-pill failed">Send failed</span> when required courier delivery parameters are incomplete. To resolve:</p>
              <ol style="margin: 8px 0 8px 20px;">
                <li>Click the <strong>pencil Edit icon</strong> on that order row to open <span class="ui-term">Edit Order</span>.</li>
                <li>Ensure <strong>Sender</strong> and <strong>Receiver</strong> have valid <span class="ui-term">Province</span>, <span class="ui-term">City</span>, and <span class="ui-term">Area</span> selected from the official J&T dropdowns (freeform text is not accepted by the carrier API).</li>
                <li>Verify that <span class="ui-term">Item Weight (kg)</span> is greater than 0 (e.g. 1 kg).</li>
                <li>Click <span class="ui-term primary">Save</span>, select the order, and click <span class="ui-term primary">Deliver with J&T</span> again.</li>
              </ol>
            </div>
          </div>

          <div class="accordion-item" data-faq="sync-modified">
            <button class="accordion-trigger">
              <span>Why are my Shopify order modifications not showing in the J&T plugin?</span>
              <span class="accordion-chevron">▼</span>
            </button>
            <div class="accordion-content">
              <p><strong>Auto Syncing only imports newly created Shopify orders.</strong> If a customer changes their delivery address or phone number in Shopify after the order was created, the change will not automatically propagate. You must go to the <span class="ui-term">Orders</span> tab in the J&T plugin and click <span class="ui-term">Sync your orders</span> to fetch the updated information.</p>
            </div>
          </div>

          <div class="accordion-item" data-faq="cancel-mismatch">
            <button class="accordion-trigger">
              <span>Why did cancelling an order in Shopify not cancel the J&T waybill?</span>
              <span class="accordion-chevron">▼</span>
            </button>
            <div class="accordion-content">
              <p>Order cancellations in Shopify and J&T Express are <strong>independent</strong>. Cancelling in Shopify does not cancel the J&T shipment, and cancelling in J&T does not cancel the Shopify order. Furthermore, automatic cancellation sync is currently under development. To cancel a waybill in J&T, navigate to <span class="ui-term">Orders</span>, click the three-dots (<span class="ui-term">...</span>) menu on the order row, and select <span class="ui-term">Cancel order</span>.</p>
            </div>
          </div>

          <div class="accordion-item" data-faq="auto-sync-provinces">
            <button class="accordion-trigger">
              <span>How does province filtering in Auto Syncing work?</span>
              <span class="accordion-chevron">▼</span>
            </button>
            <div class="accordion-content">
              <p>In <span class="ui-term">Settings → Auto syncing</span>:</p>
              <ul style="margin: 8px 0 8px 20px;">
                <li>If <strong>no provinces are selected</strong>, newly created Shopify orders from <em>all Egyptian provinces</em> are automatically imported.</li>
                <li>If <strong>specific provinces are selected</strong> (e.g. Giza, Alexandria), only new orders with matching destination provinces are auto-synced. Orders outside those provinces must be reviewed manually.</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      screenshots: [
        'scr-orders-filter',
        'scr-orders-edit',
        'scr-orders-details',
        'scr-settings-autosync'
      ]
    },

    {
      id: 'important-notes',
      number: '09',
      shortTitle: 'Important Rules & Notes',
      title: 'Important Rules & Operational Notes',
      subtitle: 'Critical system rules every merchant must remember to avoid fulfillment errors.',
      badge: 'Rules & Warnings',
      contentHtml: `
        <div class="callout danger">
          <div class="callout-icon">🚨</div>
          <div class="callout-body">
            <div class="callout-title">1. Independent Cancellation Systems</div>
            <div class="callout-text">Cancelling an order in Shopify Admin does <strong>NOT</strong> cancel the corresponding J&T shipment or waybill. Conversely, selecting <span class="ui-term">Cancel order</span> inside the J&T plugin does not cancel the order in Shopify. The automated cancellation synchronization feature is currently under development. Always verify and execute cancellations in both systems.</div>
          </div>
        </div>

        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <div class="callout-title">2. Modified Orders Require Manual Sync</div>
            <div class="callout-text">The <span class="ui-term">Auto syncing</span> service applies exclusively to <em>newly created</em> Shopify orders. Any subsequent changes made to existing Shopify orders (shipping address, recipient phone number, line item quantities) will not be pulled automatically. You must manually click <span class="ui-term">Sync your orders</span> on the Orders tab.</div>
          </div>
        </div>

        <div class="callout info">
          <div class="callout-icon">ℹ️</div>
          <div class="callout-body">
            <div class="callout-title">3. Weight & Address Requirements for Delivery</div>
            <div class="callout-text">Before clicking <span class="ui-term primary">Deliver with J&T</span>, ensure that <span class="ui-term">Item Weight (kg)</span> is populated (cannot be zero or empty) and that the destination Province, City, and Area are selected from the standard dropdown lists. Missing geographic data will trigger a <span class="status-pill failed">Send failed</span> status.</div>
          </div>
        </div>

        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body">
            <div class="callout-title">4. Automatic Shopify Tagging</div>
            <div class="callout-text">Whenever an order is successfully pulled into the J&T plugin, the plugin automatically adds the tag <span class="ui-term">J&T_synced</span> to the order in Shopify Admin. This allows you to filter and identify synchronized orders directly in your Shopify backend.</div>
          </div>
        </div>
      `,
      screenshots: [
        'scr-orders-edit-note',
        'scr-shopify-orders',
        'scr-settings-autosync'
      ]
    }
  ]
};

// Mirror Arabic and Chinese content with culturally and linguistically authentic translations
window.JNT_DOCS_DATA.ar = [
  {
    id: 'introduction',
    number: '01',
    shortTitle: 'المقدمة والتعريف',
    title: 'المقدمة والتعريف بالتطبيق',
    subtitle: 'نظرة عامة على دمج خدمات J&T Express مصر اللوجستية مع متاجر شوبيفاي.',
    badge: 'المفهوم الأساسي',
    contentHtml: `
      <p>يُعد <strong>تطبيق J&T Express Shopify</strong> الحل اللوجستي المؤسسي الرسمي المطور خصيصاً لتجار منصة شوبيفاي في جمهورية مصر العربية. يربط التطبيق متجرك مباشرة بشبكة الشحن والتوزيع المحلية لشركة J&T Express، بما يتيح مزامنة طلبات المتجر، وإنشاء بوالص الشحن الفورية، وطباعة الملصقات المجمعة، وتتبع مسار الطرود خطوة بخطوة من داخل لوحة تحكم شوبيفاي.</p>

      <div class="callout info">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <div class="callout-title">تكامل لوجستي مدمج بالكامل</div>
          <div class="callout-text">بدلاً من إعادة توجيه التجار إلى مواقع خارجية، يعمل تطبيق J&T بالكامل داخل لوحة تحكم Shopify Admin كتطبيق مدمج وآمن دون الحاجة إلى التنقل بين نوافذ متعددة.</div>
        </div>
      </div>

      <h3 style="margin: 20px 0 10px;">أبرز مميزات وخصائص التطبيق</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-card-title">🔗 ربط مباشر بحساب VIP</div>
          <div class="feature-card-desc">مصادقة فورية بالاعتماد على كود العميل Customer Code وكلمة المرور المسجلة مسبقاً لدى J&T دون الحاجة لإدخال مفاتيح Shopify API يدوياً.</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title">⚡ مزامنة سريعة ودقيقة للطلبات</div>
          <div class="feature-card-desc">مزامنة طلبات شوبيفاي بنقرة واحدة عبر زر "Sync your orders" مع سحب فوري لكافة تفاصيل المنتجات والعملاء، وتمييز الطلبات المتزامنة بوسم <span class="ui-term">J&T_synced</span>.</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title">📦 إدارة دورة الشحن الكاملة</div>
          <div class="feature-card-desc">مساحتان متخصصتان للعمل: تبويب <span class="ui-term">Orders</span> لمعالجة الطلبات وتدقيق العناوين وطباعة البوليصة، وتبويب <span class="ui-term">Shipments</span> لتتبع الشحنات وسجل المسح الميداني.</div>
        </div>
      </div>
    `,
    screenshots: ['scr-overview', 'scr-overview-guide']
  },
  {
    id: 'login-linking',
    number: '02',
    shortTitle: 'تسجيل الدخول والربط',
    title: 'تسجيل الدخول وربط الحساب',
    subtitle: 'كيفية فتح التطبيق وربط حساب J&T VIP التجاري دون الحاجة لمفاتيح API يدوية.',
    badge: 'المصادقة والربط',
    contentHtml: `
      <p>تتم عملية الدخول وربط متجر شوبيفاي بحساب الشحن الخاص بك لدى J&T Express بسلاسة وأمان تام دون أي تعقيدات تقنية.</p>

      <h3 style="margin: 20px 0 10px;">خطوات تسجيل الدخول التفصيلية</h3>
      <ol class="step-list">
        <li class="step-list-item">
          <div class="step-list-num">1</div>
          <div class="step-list-content">
            <h4>فتح لوحة تحكم Shopify Admin</h4>
            <p>سجل الدخول إلى حساب التاجر الخاص بمتجرك عبر الرابط (<span class="ui-term">admin.shopify.com</span>).</p>
          </div>
        </li>
        <li class="step-list-item">
          <div class="step-list-num">2</div>
          <div class="step-list-content">
            <h4>الانتقال إلى قسم التطبيقات (Apps)</h4>
            <p>من القائمة الجانبية في شوبيفاي، انقر على <span class="ui-term">Apps</span> ثم اختر تطبيق <span class="ui-term">J&T</span>.</p>
          </div>
        </li>
        <li class="step-list-item">
          <div class="step-list-num">3</div>
          <div class="step-list-content">
            <h4>تشغيل التطبيق مدمجاً</h4>
            <p>تفتح واجهة التطبيق مباشرة داخل لوحة تحكم المتجر دون أي تحويل خارجي.</p>
          </div>
        </li>
        <li class="step-list-item">
          <div class="step-list-num">4</div>
          <div class="step-list-content">
            <h4>إدخال بيانات حساب J&T VIP</h4>
            <p>أدخل كود العميل <strong>J&T Customer Code</strong> (مثل <span class="ui-term">J0086025775</span>) في خانة اسم المستخدم، وكلمة مرور حساب VIP الخاص بك لدى J&T.</p>
          </div>
        </li>
        <li class="step-list-item">
          <div class="step-list-num">5</div>
          <div class="step-list-content">
            <h4>اكتمال الربط التلقائي</h4>
            <p>بمجرد تأكيد الدخول، يتم ربط المتجر تلقائياً بحساب العميل التجاري لدى J&T Express.</p>
          </div>
        </li>
      </ol>

      <div class="callout warning">
        <div class="callout-icon">⚠️</div>
        <div class="callout-body">
          <div class="callout-title">قاعدة أمنية وتشغيلية هامة</div>
          <div class="callout-text"><strong>لا</strong> تحتاج إلى إنشاء حساب جديد، ولا نسخ مفاتيح Shopify API Key السرية، ولا إعداد روابط Webhooks يدوياً. إذا لم يكن لديك كود عميل J&T Customer Code حتى الآن، يرجى التواصل مع مدير حسابات J&T Express مصر لفتح حساب تجاري VIP.</div>
        </div>
      </div>
    `,
    screenshots: ['scr-settings-profile', 'scr-overview-guide']
  },
  {
    id: 'overview',
    number: '03',
    shortTitle: 'نظرة عامة (Overview)',
    title: 'نظرة عامة والأدوات اللوجستية السريعة (Overview)',
    subtitle: 'الاستعلام عما يصل إلى 100 بوليصة معاً، والإجراءات السريعة، ودليل البدء.',
    badge: 'لوحة المعلومات',
    contentHtml: `
      <p>يُعد تبويب <span class="ui-term">Overview</span> نقطة الانطلاق الرئيسية، حيث يستقبلك الشعار الرسمي لشركة J&T مصر (<em>"نربط مصر، ونوصل المستقبل"</em>) مع باقة من الأدوات اليومية للتاجر.</p>

      <h3 style="margin: 22px 0 10px;">1. الاستعلام الجماعي عن الشحنات (Tracking Query حتى 100 بوليصة)</h3>
      <p>يتيح حقل <strong>Tracking Query</strong> للتاجر ولفريق خدمة العملاء تتبع ما يصل إلى 100 رقم بوليصة شحن في استعلام واحد. قم بلصق أرقام التتبع مفصولة بفواصل أو مسافات واضغط زر <span class="ui-term primary">Search</span> الأحمر للحصول على التحديثات اللحظية.</p>

      <h3 style="margin: 22px 0 10px;">2. بطاقات الإجراءات السريعة (Quick Actions)</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-card-title">📝 إرسال الملاحظات (Feedback & Survey)</div>
          <div class="feature-card-desc">النقر على <span class="ui-term">Give Feedback ↗</span> يفتح نافذة تتيح لك مشاركة تجربتك ومقترحاتك لتطوير التطبيق مباشرة مع فريق المنتج (حتى 500 حرف).</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title">📖 دليل البدء السريع (Getting Started Guide)</div>
          <div class="feature-card-desc">النقر على <span class="ui-term">Read Guide ↗</span> يعرض دليلاً سريعاً من 4 خطوات يشرح ربط الحساب، مزامنة الطلبات، إرسال الشحنات، والتتبع.</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title">👑 نظام VIP للعملاء (J&T VIP Access)</div>
          <div class="feature-card-desc">النقر على <span class="ui-term">Visit VIP ↗</span> ينقل أصحاب الحسابات التجارية مباشرة إلى بوابة VIP المتقدمة للاستفادة من الدعم ذي الأولوية وتقارير الفواتير والمطابقات المالية.</div>
        </div>
      </div>
    `,
    screenshots: ['scr-overview', 'scr-overview-feedback', 'scr-overview-guide']
  },
  {
    id: 'orders',
    number: '04',
    shortTitle: 'إدارة الطلبات (Orders)',
    title: 'إدارة الطلبات والشحن (Orders)',
    subtitle: 'المزامنة، وتعديل العناوين، والإرسال الجماعي، وطباعة البوليصة، وتخصيص الأعمدة.',
    badge: 'تنفيذ وشحن الطلبات',
    contentHtml: `
      <p>يُمثل تبويب <span class="ui-term">Orders</span> مركز العمليات اليومي الذي تتم فيه معالجة الطلبات المتزامنة من شوبيفاي، ومراجعة وتعديل بياناتها، وإرسالها لشركة J&T لإنشاء أرقام البوالص وطباعتها.</p>

      <h3 style="margin: 22px 0 10px;">أدوات شريط الإجراءات العلوي</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-card-title"><span class="ui-term primary">Deliver with J&T</span></div>
          <div class="feature-card-desc">إرسال الطلبات المحددة لشركة J&T Express. يُفعل الزر عند تحديد طلب أو أكثر. بمجرد النقر، يتم إصدار رقم تتبع وبوليصة رسمي (مثل <span class="ui-term">UEG088903302756</span>) وتتحول الحالة إلى <span class="status-pill placed">Placed</span>.</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="ui-term">Print waybill</span></div>
          <div class="feature-card-desc">طباعة بوالص الشحن الرسمية لشركة J&T بحجم الملصقات الحرارية. يكون الزر متاحاً فقط للطلبات التي تحمل رقم تتبع وحالتها <span class="status-pill placed">Placed</span>، وتتحول حالة البوليصة بعدها إلى <span class="status-pill placed">Printed</span>.</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="ui-term">Export</span> و <span class="ui-term">Download center</span></div>
          <div class="feature-card-desc">تصدير بيانات الطلبات لملف Excel. بعد النقر على تصدير، انقر على <span class="ui-term">Download center</span> لتحميل الملف المنتهي إلى جهازك.</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="ui-term">Sync your orders</span></div>
          <div class="feature-card-desc">السحب اليدوي للطلبات الجديدة أو الطلبات التي تم تعديلها في شوبيفاي. يجب الضغط عليه دائماً بعد تعديل أي طلب داخل شوبيفاي.</div>
        </div>
      </div>

      <h3 style="margin: 24px 0 10px;">قدرات البحث والفلترة المتقدمة</h3>
      <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
        <li><strong>البحث بالرقم (Number):</strong> البحث برقم طلب شوبيفاي (مثل <span class="ui-term">#1058</span>) أو برقم بوليصة الشحن والتتبع.</li>
        <li><strong>حالة الطلب (Order status):</strong> فلترة حسب <span class="status-pill synced">Synced</span>، <span class="status-pill placed">Placed</span>، أو <span class="status-pill cancelled">Cancelled</span>.</li>
        <li><strong>حالة البوليصة (Label status):</strong> فلترة حسب <span class="status-pill placed">Printed</span> أو <span class="status-pill synced">Not printed</span>.</li>
        <li><strong>حالة التأكيد (Confirm status):</strong> فلترة حسب <span class="status-pill placed">Sent</span>، <span class="status-pill failed">Send failed</span>، <span class="status-pill synced">Order confirmed</span>، <span class="status-pill synced">Unconfirmed</span>، أو <span class="status-pill cancelled">Cancel order</span>.</li>
        <li><strong>تاريخ الإنشاء (Created at):</strong> تحديد نطاق تاريخ محدد عبر التقويم.</li>
      </ul>

      <div class="callout danger">
        <div class="callout-icon">🚨</div>
        <div class="callout-body">
          <div class="callout-title">تنبيه هام عند تعديل الطلبات في شوبيفاي</div>
          <div class="callout-text">إذا قمت بتعديل عنوان العميل أو هاتفه أو المنتجات في شوبيفاي بعد المزامنة الأولى، فلن تنتقل التعديلات تلقائياً. <strong>يجب</strong> النقر على زر <span class="ui-term">Sync your orders</span> في صفحة Orders لتحديث البيانات.</div>
        </div>
      </div>
    `,
    screenshots: [
      'scr-orders-main',
      'scr-orders-bulk',
      'scr-orders-filter',
      'scr-orders-edit',
      'scr-orders-items',
      'scr-orders-details',
      'scr-orders-edit-note',
      'scr-orders-columns',
      'scr-orders-download',
      'scr-shopify-orders'
    ]
  },
  {
    id: 'shipments',
    number: '05',
    shortTitle: 'تتبع الشحنات (Shipments)',
    title: 'إدارة الشحنات وتتبعها لحظياً (Shipments)',
    subtitle: 'متابعة الشحنات المسلمة لـ J&T، والخط الزمني لتحديثات المسح والتوصيل.',
    badge: 'تتبع الشحنات',
    contentHtml: `
      <p>يختص تبويب <span class="ui-term">Shipments</span> بالشحنات التي تم تسليمها بالفعل لشركة J&T Express وحصلت على رقم بوليصة نشط، لمتابعة مسارها الميداني خطوة بخطوة حتى وصولها إلى العميل النهائي.</p>

      <h3 style="margin: 22px 0 10px;">حالات الشحنة اللوجستية المعتمدة</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-card-title"><span class="status-pill synced">Picked up</span></div>
          <div class="feature-card-desc">قام مندوب J&T باستلام الطرد من المستودع أو الفرع المعين بنجاح.</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="status-pill transit">In transit</span></div>
          <div class="feature-card-desc">الشحنة تتحرك عبر مراكز الفرز أو الشحن بين المحافظات.</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="status-pill delivery">Out for delivery</span></div>
          <div class="feature-card-desc">الشحنة محملة في سيارة التوزيع مع المندوب ومجدولة للتسليم للعميل اليوم.</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="status-pill delivered">Delivered</span></div>
          <div class="feature-card-desc">تم تسليم الشحنة للعميل بنجاح وتحصيل مبلغ الدفع عند الاستلام COD إن وجد.</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="status-pill cancelled">Returning / Returned</span></div>
          <div class="feature-card-desc">تعذر التسليم (مثل رفض العميل أو عدم الرد) والشحنة قيد الإرجاع أو تم إرجاعها للتاجر.</div>
        </div>
      </div>

      <h3 style="margin: 24px 0 10px;">نافذة تفاصيل التتبع وسجل المسح (View tracking)</h3>
      <p>النقر على <span class="ui-term">View tracking</span> يفتح الخط الزمني لسجل المسح الميداني المسجل بواسطة أجهزة مندوبي J&T:</p>
      <ol class="step-list">
        <li class="step-list-item">
          <div class="step-list-num">1</div>
          <div class="step-list-content">
            <h4>مسح الاستلام (Pickup scan)</h4>
            <p>تسجيل استلام الطرد الفعلي بالتاريخ والوقت الدقيق.</p>
          </div>
        </li>
        <li class="step-list-item">
          <div class="step-list-num">2</div>
          <div class="step-list-content">
            <h4>مسح الإرسال والوصول (Sending scan & Arrival Scan)</h4>
            <p>خروج الشحنة من مركز الفرز ووصولها إلى المحطة التابعة لعنوان المستلم.</p>
          </div>
        </li>
        <li class="step-list-item">
          <div class="step-list-num">3</div>
          <div class="step-list-content">
            <h4>مسح التسليم (Delivery scan - Latest)</h4>
            <p>الشارة الحمراء <span class="ui-term primary">Latest</span> توضح الحالة اللحظية الأخيرة مع اسم المندوب والتأكيد النهائي.</p>
          </div>
        </li>
      </ol>
    `,
    screenshots: [
      'scr-shipments-main',
      'scr-shipments-filters',
      'scr-shipments-search',
      'scr-shipments-tracking'
    ]
  },
  {
    id: 'settings',
    number: '06',
    shortTitle: 'الإعدادات (Settings)',
    title: 'الإعدادات والخيارات المتقدمة (Settings)',
    subtitle: 'الملف الشخصي والفرع المعين، وإعدادات المزامنة التلقائية للمحافظات، ودفتر العناوين.',
    badge: 'الإعدادات والتهيئة',
    contentHtml: `
      <p>يتيح تبويب <span class="ui-term">Settings</span> إدارة بيانات الحساب المرتبط، وضبط قواعد المزامنة التلقائية للطلبات، وإدارة دفتر عناوين الراسل والمستلم.</p>

      <h3 style="margin: 22px 0 10px;">التبويب الأول: الملف الشخصي (Profile)</h3>
      <p>يعرض بطاقتين تفصيليتين:</p>
      <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
        <li><strong>بطاقة التاجر:</strong> اسم التاجر، كود العميل (<span class="ui-term">J0086025775</span>)، الهاتف، البريد، ورابط متجر شوبيفاي المرتبط.</li>
        <li><strong>بطاقة الفرع المعين (HQ):</strong> بيانات محطة الاستلام التابعة لـ J&T (كود الفرع <span class="ui-term">888888</span>، مدينة الفرع، الهاتف، وعنوان المحطة).</li>
        <li><strong>إلغاء الربط:</strong> زر <span class="ui-term">Unbind account</span> لإلغاء ربط المتجر بحساب J&T الحالي.</li>
      </ul>

      <h3 style="margin: 22px 0 10px;">التبويب الثاني: المزامنة التلقائية (Auto syncing)</h3>
      <p>أتمتة عملية سحب الطلبات من شوبيفاي إلى تطبيق J&T:</p>
      <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
        <li><strong>تفعيل المزامنة:</strong> تفعيل خيار <span class="ui-term">Automatically synchronize orders with J&T logistics for shipment</span>.</li>
        <li><strong>تحديد المحافظات المسموحة:</strong> في حقل <span class="ui-term">Recipient provinces allowed for auto sync</span>:
          <ul style="margin-top: 6px;">
            <li><strong>عدم تحديد أي محافظة:</strong> تتم مزامنة الطلبات الجديدة من <em>كافة المحافظات المصرية</em> تلقائياً.</li>
            <li><strong>تحديد محافظات معينة (مثل الجيزة، الإسكندرية):</strong> ستتم مزامنة الطلبات المتجهة للمحافظات المختارة فقط.</li>
          </ul>
        </li>
        <li><strong>حفظ التغييرات:</strong> تأكد دائماً من الضغط على زر <span class="ui-term primary">Save changes</span> الأحمر بالأعلى.</li>
      </ul>

      <div class="callout warning">
        <div class="callout-icon">⚠️</div>
        <div class="callout-body">
          <div class="callout-title">مزامنة الإلغاء التلقائي: قيد التطوير</div>
          <div class="callout-text">خيار <em>"Automatically Sync Order Cancellation Information to J&T"</em> ما زال <strong>قيد التطوير والاختبار الداخلي</strong>. حتى في حال تفعيله، لا يتم إلغاء بوالص J&T تلقائياً عند إلغاء الطلب في شوبيفاي، ويجب إلغاء الطلب يدوياً في كلا النظامين.</div>
        </div>
      </div>

      <h3 style="margin: 22px 0 10px;">التبويب الثالث: العناوين (Addresses)</h3>
      <p>إدارة دفتر العناوين لإعادة استخدامها في الشحنات القادمة:</p>
      <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
        <li>التبديل بين <span class="ui-term">Sender address</span> (عنوان الراسل) و <span class="ui-term">Receiver address</span> (عنوان المستلم).</li>
        <li>النقر على <span class="ui-term">+ Add address</span> لإضافة عنوان جديد مع خيار تعيينه كافتراضي <span class="ui-term">Set as default address</span>.</li>
        <li>خيارات السطر لتعديل العنوان <span class="ui-term">Edit</span>، أو حذفه <span class="ui-term">Delete</span>، أو تعيينه كافتراضي <span class="ui-term">Set default</span>.</li>
      </ul>
    `,
    screenshots: [
      'scr-settings-profile',
      'scr-settings-autosync',
      'scr-settings-provinces',
      'scr-settings-addresses',
      'scr-settings-addresses-add'
    ]
  },
  {
    id: 'workflow',
    number: '07',
    shortTitle: 'مسار العمل (Workflow)',
    title: 'مسار العمل التفاعلي المتكامل',
    subtitle: 'دليل تفاعلي من 8 مراحل يوضح رحلة تنفيذ الطلب من فتح التطبيق وحتى التسليم النهائي.',
    badge: 'مسار تفاعلي',
    contentHtml: `
      <p>تمر دورة تنفيذ الطلبات في تطبيق J&T Express Shopify بثماني مراحل متسلسلة ومترابطة. استخدم المخطط التفاعلي أدناه لاستعراض الخطوات وشاشات النظام الحقيقية المرتبطة بكل مرحلة.</p>
      <div id="interactive-workflow-mount"></div>
    `,
    screenshots: [
      'scr-overview-guide',
      'scr-settings-profile',
      'scr-orders-main',
      'scr-orders-edit',
      'scr-orders-bulk',
      'scr-shipments-tracking'
    ]
  },
  {
    id: 'troubleshooting-faq',
    number: '08',
    shortTitle: 'الأسئلة الشائعة (FAQs)',
    title: 'استكشاف الأخطاء والأسئلة الشائعة (FAQs)',
    subtitle: 'إجراءات تشخيصية عملية ومباشرة لأكثر الحالات والمشاكل شيوعاً.',
    badge: 'قاعدة المعرفة',
    contentHtml: `
      <p>انقر على أي سؤال للاطلاع على الحلول التشخيصية المعتمدة وفق آلية عمل النظام الحقيقية:</p>

      <div class="accordion-list">
        <div class="accordion-item" data-faq="print-fail">
          <button class="accordion-trigger">
            <span>لماذا لا يمكنني النقر على زر طباعة البوليصة "Print waybill"؟</span>
            <span class="accordion-chevron">▼</span>
          </button>
          <div class="accordion-content">
            <p>يشترط زر <span class="ui-term">Print waybill</span> توفر شرطين معاً:</p>
            <ol style="margin: 8px 0 8px 20px;">
              <li>تحديد الطلب باستخدام مربع الاختيار بجانب رقم الطلب.</li>
              <li>أن يكون الطلب قد تم إرساله لـ J&T Express بالفعل وحالته <span class="status-pill placed">Placed</span> ويحمل رقم تتبع حقيقي (<span class="ui-term">UEG...</span>).</li>
            </ol>
            <p>إذا كانت الحالة ما زالت <span class="status-pill synced">Synced</span>، حدد الطلب أولاً واضغط زر <span class="ui-term primary">Deliver with J&T</span> الأحمر، وبعد صدور رقم التتبع اطبع البوليصة.</p>
          </div>
        </div>

        <div class="accordion-item" data-faq="send-failed">
          <button class="accordion-trigger">
            <span>كيف أحل مشكلة فشل الإرسال "Send failed" في عمود تأكيد الطلب؟</span>
            <span class="accordion-chevron">▼</span>
          </button>
          <div class="accordion-content">
            <p>تظهر حالة <span class="status-pill failed">Send failed</span> عند وجود بيانات ناقصة أو غير معتمدة لدى شركة الشحن. للحل:</p>
            <ol style="margin: 8px 0 8px 20px;">
              <li>اضغط على <strong>أيقونة القلم (Edit)</strong> في نفس السطر لفتح نافذة <span class="ui-term">Edit Order</span>.</li>
              <li>تأكد من اختيار المحافظة والمدينة والمنطقة من القوائم المنسدلة المعتمدة لـ J&T وليس كتابة نص حر.</li>
              <li>تأكد من كتابة وزن الشحنة <span class="ui-term">Item Weight (kg)</span> برقم أكبر من الصفر (مثل 1 كجم).</li>
              <li>احفظ التعديلات ثم أعد تحديد الطلب واضغط <span class="ui-term primary">Deliver with J&T</span> مجدداً.</li>
            </ol>
          </div>
        </div>

        <div class="accordion-item" data-faq="sync-modified">
          <button class="accordion-trigger">
            <span>لماذا لم تنعكس التعديلات التي أجريتها في شوبيفاي داخل تطبيق J&T؟</span>
            <span class="accordion-chevron">▼</span>
          </button>
          <div class="accordion-content">
            <p><strong>المزامنة التلقائية Auto Syncing تعمل فقط على الطلبات الجديدة المنشأة حديثاً.</strong> عند تعديل عنوان أو هاتف عميل في شوبيفاي لطلب قديم، لا تنتقل التعديلات من تلقاء نفسها. يجب الدخول إلى صفحة <span class="ui-term">Orders</span> في تطبيق J&T والنقر على <span class="ui-term">Sync your orders</span> لتحديث البيانات فورياً.</p>
          </div>
        </div>

        <div class="accordion-item" data-faq="cancel-mismatch">
          <button class="accordion-trigger">
            <span>لماذا لم يتم إلغاء بوليصة J&T عندما قمت بإلغاء الطلب في شوبيفاي؟</span>
            <span class="accordion-chevron">▼</span>
          </button>
          <div class="accordion-content">
            <p>نظاما شوبيفاي و J&T يعملان بشكل <strong>منفصل ومستقل</strong> في عمليات الإلغاء، وميزة المزامنة التلقائية للإلغاء ما زالت قيد التطوير. لإلغاء بوليصة الشحن لدى J&T، افتح صفحة <span class="ui-term">Orders</span>، واضغط على قائمة الثلاث نقاط (<span class="ui-term">...</span>) واختر <span class="ui-term">Cancel order</span>.</p>
          </div>
        </div>

        <div class="accordion-item" data-faq="auto-sync-provinces">
          <button class="accordion-trigger">
            <span>كيف تعمل قاعدة اختيار المحافظات في المزامنة التلقائية؟</span>
            <span class="accordion-chevron">▼</span>
          </button>
          <div class="accordion-content">
            <p>في صفحة <span class="ui-term">Settings → Auto syncing</span>:</p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>إذا <strong>لم تختر أي محافظة</strong>: ستتم مزامنة كافة الطلبات الواردة من <em>جميع المحافظات المصرية</em> تلقائياً.</li>
              <li>إذا <strong>اخترت محافظات محددة</strong> (مثل الجيزة والإسكندرية): فسيتم فقط سحب الطلبات المتجهة لتلك المحافظات، وتجاهل باقي المحافظات حتى تقوم بمزامنتها يدوياً.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    screenshots: [
      'scr-orders-filter',
      'scr-orders-edit',
      'scr-orders-details',
      'scr-settings-autosync'
    ]
  },
  {
    id: 'important-notes',
    number: '09',
    shortTitle: 'تنبيهات وقواعد التشغيل',
    title: 'تنبيهات هامة وقواعد التشغيل الأساسية',
    subtitle: 'قواعد تشغيلية جوهرية يجب على كل تاجر معرفتها لتفادي أي أخطاء شحن.',
    badge: 'قواعد وتحذيرات',
    contentHtml: `
      <div class="callout danger">
        <div class="callout-icon">🚨</div>
        <div class="callout-body">
          <div class="callout-title">1. استقلالية نظامي الإلغاء تماماً</div>
          <div class="callout-text">إلغاء الطلب في Shopify Admin <strong>لا</strong> يلغي شحنة J&T أبداً. وبالمثل، اختيار <span class="ui-term">Cancel order</span> في تطبيق J&T لا يلغي طلب شوبيفاي. خاصية مزامنة الإلغاء قيد التطوير حالياً، لذلك احرص دائماً على الإلغاء في النظامين معاً يدوياً.</div>
        </div>
      </div>

      <div class="callout warning">
        <div class="callout-icon">⚠️</div>
        <div class="callout-body">
          <div class="callout-title">2. الطلبات المعدلة تتطلب نقرة المزامنة اليدوية</div>
          <div class="callout-text">خدمة <span class="ui-term">Auto syncing</span> تخص الطلبات <em>الجديدة فقط</em>. أي تعديل يتم لاحقاً على طلب قائم داخل شوبيفاي يتطلب منك النقر اليدوي على زر <span class="ui-term">Sync your orders</span> في صفحة Orders.</div>
        </div>
      </div>

      <div class="callout info">
        <div class="callout-icon">ℹ️</div>
        <div class="callout-body">
          <div class="callout-title">3. اشتراط الوزن والمحافظة والمنطقة المعتمدة</div>
          <div class="callout-text">قبل النقر على <span class="ui-term primary">Deliver with J&T</span>، تأكد من إدخال وزن الشحنة <span class="ui-term">Item Weight (kg)</span> (لا يقبل الصفر) وتحديد المحافظة والمدينة والمنطقة من القوائم النظامية لتجنب خطأ <span class="status-pill failed">Send failed</span>.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✅</div>
        <div class="callout-body">
          <div class="callout-title">4. وسم شوبيفاي التلقائي (J&T_synced)</div>
          <div class="callout-text">عند مزامنة أي طلب بنجاح داخل تطبيق J&T، يضيف النظام وسم <span class="ui-term">J&T_synced</span> تلقائياً للطلب في Shopify Admin لتسهيل فرزه وإدارته مباشرة من لوحة شوبيفاي.</div>
        </div>
      </div>
    `,
    screenshots: [
      'scr-orders-edit-note',
      'scr-shopify-orders',
      'scr-settings-autosync'
    ]
  }
];

// Chinese Content
window.JNT_DOCS_DATA.zh = [
  {
    id: 'introduction',
    number: '01',
    shortTitle: '插件简介与核心优势',
    title: '插件简介与核心优势 (Introduction)',
    subtitle: '极兔速递埃及本地化电商物流与 Shopify 系统的深度融合。',
    badge: '核心优势',
    contentHtml: `
      <p><strong>J&T Express 极兔速递 Shopify 插件</strong>是专门面向埃及本土及出海 Shopify 商家打造的企业级官方物流履约系统。该插件无缝打通 Shopify 独立站店铺与极兔速递在埃及全境的快递运输网络，支持一键订单同步、自动计费发货、面单高速批量打印、智能省份区域分流以及端到端实时轨迹监控。</p>

      <div class="callout info">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <div class="callout-title">原生嵌入式企业级体验</div>
          <div class="callout-text">不同于传统的跳转外部网页模式，本插件完全以内嵌应用（Embedded App）形式直接运行在 Shopify Admin 后台内，保障单点登录与数据安全，无需频繁切换窗口。</div>
        </div>
      </div>

      <h3 style="margin: 20px 0 10px;">核心功能与集成优势</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-card-title">🔗 VIP 直连鉴权</div>
          <div class="feature-card-desc">直接通过极兔官方签约客户编码（Customer Code）与密码认证，彻底告别繁琐的私有应用创建、API Key 复制与 Webhook 手工配置。</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title">⚡ 双模订单同步体系</div>
          <div class="feature-card-desc">新订单后台自动准实时同步，修改后的订单支持随时手动刷新，并在 Shopify 后台原生订单列表自动打上 <span class="ui-term">J&T_synced</span> 标识标签。</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title">📦 双工作台分流处理</div>
          <div class="feature-card-desc"><span class="ui-term">Orders</span>（订单工作台）专注发货前校验、地址补全与面单打印；<span class="ui-term">Shipments</span>（运单工作台）专注在途包裹监控与实机扫描轨迹查验。</div>
        </div>
      </div>
    `,
    screenshots: ['scr-overview', 'scr-overview-guide']
  },
  {
    id: 'login-linking',
    number: '02',
    shortTitle: '登录与账号绑定',
    title: '登录与账号绑定 (Login & Account Linking)',
    subtitle: '如何快速打开插件并绑定 J&T VIP 客户账号（免手动 API 密钥）。',
    badge: '账号鉴权',
    contentHtml: `
      <p>极兔速递 Shopify 插件采用免配置的智能授权体系，商家无需掌握任何技术接口即可瞬间完成绑定。</p>

      <h3 style="margin: 20px 0 10px;">详细操作步骤</h3>
      <ol class="step-list">
        <li class="step-list-item">
          <div class="step-list-num">1</div>
          <div class="step-list-content">
            <h4>登录 Shopify 后台</h4>
            <p>使用商家管理员账号登录店铺后台管理界面（<span class="ui-term">admin.shopify.com</span>）。</p>
          </div>
        </li>
        <li class="step-list-item">
          <div class="step-list-num">2</div>
          <div class="step-list-content">
            <h4>进入应用列表</h4>
            <p>在左侧边栏找到并点击 <span class="ui-term">Apps</span>，选择列表中的 <span class="ui-term">J&T</span> 插件。</p>
          </div>
        </li>
        <li class="step-list-item">
          <div class="step-list-num">3</div>
          <div class="step-list-content">
            <h4>原生内嵌加载</h4>
            <p>插件直接在当前工作区展开，无需任何外部页面弹窗或重定向。</p>
          </div>
        </li>
        <li class="step-list-item">
          <div class="step-list-num">4</div>
          <div class="step-list-content">
            <h4>输入 J&T VIP 凭证</h4>
            <p>用户名填写您在极兔签约的 <strong>Customer Code</strong>（客户编码，例如 <span class="ui-term">J0086025775</span>），密码输入现有 VIP 密码。</p>
          </div>
        </li>
        <li class="step-list-item">
          <div class="step-list-num">5</div>
          <div class="step-list-content">
            <h4>店铺自动完成关联</h4>
            <p>登录成功后，当前 Shopify 店铺域名即自动与该极兔客户商户号牢固绑定，永久生效。</p>
          </div>
        </li>
      </ol>

      <div class="callout warning">
        <div class="callout-icon">⚠️</div>
        <div class="callout-body">
          <div class="callout-title">重要安全规则与免责提示</div>
          <div class="callout-text">您<strong>无需</strong>在 Shopify 中手动注册新开发者账号，也<strong>无需</strong>复制任何私有 API 密钥或签名。如果尚未开通极兔 VIP 账号，请联系极兔速递埃及本地客户经理签署月结商业合同获取 Customer Code。</div>
        </div>
      </div>
    `,
    screenshots: ['scr-settings-profile', 'scr-overview-guide']
  },
  {
    id: 'overview',
    number: '03',
    shortTitle: '概览看板 (Overview)',
    title: '概览仪表盘与快捷工具 (Overview)',
    subtitle: '单次查询最多 100 个单号的 Tracking Query、快捷入口及操作指引。',
    badge: '主页看板',
    contentHtml: `
      <p><span class="ui-term">Overview</span> 概览页面是日常管理的中枢，顶部呈现极兔速递埃及主视觉横幅（<em>"Connecting Egypt, Delivering the Future"</em>），并集成了日常查件与服务工具。</p>

      <h3 style="margin: 22px 0 10px;">1. 批量运单毫秒级查询 (Tracking Query 支持 100 单)</h3>
      <p>概览页中央的 <strong>Tracking Query</strong> 查件输入框专为客服及运营人员设计。支持单次输入或粘贴多达 <strong>100 个运单号</strong>（单号间使用逗号或空格分隔），点击红色的 <span class="ui-term primary">Search</span> 按钮即可一次性聚合展示所有包裹的最新轨迹与状态。</p>

      <h3 style="margin: 22px 0 10px;">2. 快捷工具卡片 (Quick Actions)</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-card-title">📝 反馈与问卷 (Feedback & Survey)</div>
          <div class="feature-card-desc">点击 <span class="ui-term">Give Feedback ↗</span> 可唤出意见反馈弹窗，商家可在 500 字以内直接将使用感受、优化建议提交给极兔官方研发团队。</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title">📖 新手指南 (Getting Started Guide)</div>
          <div class="feature-card-desc">点击 <span class="ui-term">Read Guide ↗</span> 弹出四步入门卡片，系统化复习账号绑定、订单拉取、批量发货与运单追踪全流程。</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title">👑 VIP 系统直通车 (J&T VIP Access)</div>
          <div class="feature-card-desc">点击 <span class="ui-term">Visit VIP ↗</span> 直接跳转至 J&T 商业客户后台，享受专属大客户客服通道、运费账单对账与高级数据看板。</div>
        </div>
      </div>
    `,
    screenshots: ['scr-overview', 'scr-overview-feedback', 'scr-overview-guide']
  },
  {
    id: 'orders',
    number: '04',
    shortTitle: '订单管理 (Orders)',
    title: '订单管理与批量发货 (Orders)',
    subtitle: '同步、收发件地址核验、批量发货、面单打印、报表下载与自定义表头。',
    badge: '订单全生命周期',
    contentHtml: `
      <p><span class="ui-term">Orders</span> 页面是日常履约的主战场，集中完成从 Shopify 拉取订单、补充地址及重量信息、提交运力下单、生成面单与导出的全部操作。</p>

      <h3 style="margin: 22px 0 10px;">顶部核心操作工具栏</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-card-title"><span class="ui-term primary">Deliver with J&T</span></div>
          <div class="feature-card-desc">提交极兔承运发货。勾选一行或多行订单后激活红框按钮。点击后极兔接口自动生成官方单号（如 <span class="ui-term">UEG088903302756</span>），订单状态由 Synced 变更为 <span class="status-pill placed">Placed</span>。</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="ui-term">Print waybill</span></div>
          <div class="feature-card-desc">调起官方热敏电子面单批量打印。仅对已生成单号且状态为 <span class="status-pill placed">Placed</span> 的订单生效，打印后面单状态从 Not printed 更新为 <span class="status-pill placed">Printed</span>。</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="ui-term">Export</span> 与 <span class="ui-term">Download center</span></div>
          <div class="feature-card-desc">将选中的订单批量导出为标准 Excel 表格。导出触发后，点击旁边的 <span class="ui-term">Download center</span> 下载中心窗口直接下载保存。</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="ui-term">Sync your orders</span></div>
          <div class="feature-card-desc">手动强制拉取 Shopify 最新的新增或改动订单。在 Shopify 后台修改地址或商品后，必须点击此按钮重新同步。</div>
        </div>
      </div>

      <h3 style="margin: 24px 0 10px;">全维度复合筛选引擎</h3>
      <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
        <li><strong>单号搜索 (Number):</strong> 支持直接输入 Shopify 原始订单号（如 <span class="ui-term">#1058</span>）或 J&T 极兔运单号进行精准检索。</li>
        <li><strong>订单状态 (Order status):</strong> 过滤 <span class="status-pill synced">Synced</span>（已同步待发）、<span class="status-pill placed">Placed</span>（已下单发货）或 <span class="status-pill cancelled">Cancelled</span>（已取消）。</li>
        <li><strong>面单状态 (Label status):</strong> 过滤 <span class="status-pill placed">Printed</span>（已打单）或 <span class="status-pill synced">Not printed</span>（未打单）。</li>
        <li><strong>确认状态 (Confirm status):</strong> 过滤 <span class="status-pill placed">Sent</span>、<span class="status-pill failed">Send failed</span>（发货失败）、<span class="status-pill synced">Order confirmed</span>、<span class="status-pill synced">Unconfirmed</span>、或 <span class="status-pill cancelled">Cancel order</span>。</li>
        <li><strong>创建时间 (Created at):</strong> 支持基于日历选择起止时间范围精准筛选。</li>
      </ul>

      <div class="callout danger">
        <div class="callout-icon">🚨</div>
        <div class="callout-body">
          <div class="callout-title">重要改单规则提示</div>
          <div class="callout-text">若订单在同步之后在 Shopify Admin 后台发生了任何修改（例如买家更改了收件电话或地址），改动<strong>不会</strong>自动静默同步到极兔插件！您<strong>必须</strong>在 Orders 页面手动点击一次 <span class="ui-term">Sync your orders</span> 重新拉取最新数据。</div>
        </div>
      </div>
    `,
    screenshots: [
      'scr-orders-main',
      'scr-orders-bulk',
      'scr-orders-filter',
      'scr-orders-edit',
      'scr-orders-items',
      'scr-orders-details',
      'scr-orders-edit-note',
      'scr-orders-columns',
      'scr-orders-download',
      'scr-shopify-orders'
    ]
  },
  {
    id: 'shipments',
    number: '05',
    shortTitle: '运单追踪 (Shipments)',
    title: '运单追踪与实时轨迹 (Shipments)',
    subtitle: '监控已交运包裹、节点实物扫描时间轴与签收状态。',
    badge: '物流轨迹',
    contentHtml: `
      <p><span class="ui-term">Shipments</span> 页面汇集所有已正式提交极兔速递揽件运输的在途运单，提供从极兔揽收、省际干线运输到末端派送签收的全链路实景物流监控。</p>

      <h3 style="margin: 22px 0 10px;">运单支持的标准物流状态</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-card-title"><span class="status-pill synced">Picked up</span></div>
          <div class="feature-card-desc">极兔快递员已上门完成包裹实物揽收或已在签约网点完成入库交接。</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="status-pill transit">In transit</span></div>
          <div class="feature-card-desc">快件正在极兔分拨中心间或省际干线中流转运输。</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="status-pill delivery">Out for delivery</span></div>
          <div class="feature-card-desc">快件已到达末端派送网点，由派件员装车并于当日向买家派送。</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="status-pill delivered">Delivered</span></div>
          <div class="feature-card-desc">包裹已由买家本人或指定代收点妥投签收（COD 代收货款款项已核验收取）。</div>
        </div>
        <div class="feature-card">
          <div class="feature-card-title"><span class="status-pill cancelled">Returning / Returned</span></div>
          <div class="feature-card-desc">异常派件（如买家拒收、电话停机），包裹已发起逆向退件流程或已退回发件网点。</div>
        </div>
      </div>

      <h3 style="margin: 24px 0 10px;">Tracking Details 扫描记录时间轴</h3>
      <p>点击列表中任意运单的 <span class="ui-term">View tracking</span>，即可弹出详细的时间轴弹窗，逐条展现手持终端记录的物理扫描：</p>
      <ol class="step-list">
        <li class="step-list-item">
          <div class="step-list-num">1</div>
          <div class="step-list-content">
            <h4>揽件扫描 (Pickup scan)</h4>
            <p>揽收员完成称重核验并录入系统的准确时间戳。</p>
          </div>
        </li>
        <li class="step-list-item">
          <div class="step-list-num">2</div>
          <div class="step-list-content">
            <h4>发运扫描与到件扫描 (Sending scan & Arrival Scan)</h4>
            <p>从始发网点发往转运枢纽，以及到达目标城市分拨中心的流转节点。</p>
          </div>
        </li>
        <li class="step-list-item">
          <div class="step-list-num">3</div>
          <div class="step-list-content">
            <h4>派件扫描 (Delivery scan - Latest)</h4>
            <p>标有红色 <span class="ui-term primary">Latest</span> 徽章，展示派件员出库、派件中及妥投签收的最新动向。</p>
          </div>
        </li>
      </ol>
    `,
    screenshots: [
      'scr-shipments-main',
      'scr-shipments-filters',
      'scr-shipments-search',
      'scr-shipments-tracking'
    ]
  },
  {
    id: 'settings',
    number: '06',
    shortTitle: '系统设置 (Settings)',
    title: '系统设置与配置选项 (Settings)',
    subtitle: '商户资料与网点 HQ、新订单自动同步省份规则与地址簿管理。',
    badge: '全局配置',
    contentHtml: `
      <p><span class="ui-term">Settings</span> 页面涵盖账号资料核对、全自动同步省份范围定制以及常用发货/退件地址簿维护三大模块。</p>

      <h3 style="margin: 22px 0 10px;">Tab 1: 个人信息 (Profile)</h3>
      <p>展示两大并列信息卡片：</p>
      <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
        <li><strong>商户账户卡片：</strong>商户昵称、客户编码（<span class="ui-term">J0086025775</span>）、联系电话、注册邮箱及当前绑定的 Shopify 店铺域名。</li>
        <li><strong>分配取件网点卡片 (HQ)：</strong>展示系统为您分配的极兔取件网点信息（网点编码 <span class="ui-term">888888</span>、网点所在城市、联系电话与详细地址）。</li>
        <li><strong>解绑账号：</strong>提供 <span class="ui-term">Unbind account</span> 按钮，用于更换或解除当前 J&T VIP 账号绑定。</li>
      </ul>

      <h3 style="margin: 22px 0 10px;">Tab 2: 自动同步配置 (Auto syncing)</h3>
      <p>无需人工干预自动拉取 Shopify 新订单：</p>
      <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
        <li><strong>功能总开关：</strong>勾选 <span class="ui-term">Automatically synchronize orders with J&T logistics for shipment</span>。</li>
        <li><strong>允许自动同步的省份规则：</strong>在 <span class="ui-term">Recipient provinces allowed for auto sync</span> 中配置：
          <ul style="margin-top: 6px;">
            <li><strong>未勾选任何省份：</strong>系统将默认自动拉取埃及<em>全部省份</em>的新增订单。</li>
            <li><strong>勾选了特定省份（如 Giza、Alexandria、Gharbia 等）：</strong>系统将仅自动同步收件地址归属于所选省份的订单，其余省份订单需人工在 Orders 中查看。</li>
          </ul>
        </li>
        <li><strong>保存修改：</strong>修改后务必点击右上角的红色 <span class="ui-term primary">Save changes</span> 按钮。</li>
      </ul>

      <div class="callout warning">
        <div class="callout-icon">⚠️</div>
        <div class="callout-body">
          <div class="callout-title">自动取消同步功能提示：功能仍在研发中</div>
          <div class="callout-text">设置页中的 <em>"Automatically Sync Order Cancellation Information to J&T"</em> 选项目前仍处于<strong>内部开发测试阶段（Under Development）</strong>，尚未全量商用。无论是否勾选，Shopify 中的取消均不会自动取消极兔运单，请务必在双方系统中手动操作。</div>
        </div>
      </div>

      <h3 style="margin: 22px 0 10px;">Tab 3: 地址簿管理 (Addresses)</h3>
      <p>维护发件与退货常用地址：</p>
      <ul style="margin: 0 0 16px 20px; color: var(--text-secondary);">
        <li>在 <span class="ui-term">Sender address</span>（发件地址）与 <span class="ui-term">Receiver address</span>（收件地址）间自由切换。</li>
        <li>点击 <span class="ui-term">+ Add address</span> 新建地址，支持填写姓名、电话、标准省市区县、街道门牌，并可设为默认地址。</li>
        <li>支持通过列表快捷操作将地址 <span class="ui-term">Set default</span>（设为默认）、<span class="ui-term">Edit</span>（编辑）或 <span class="ui-term">Delete</span>（删除）。</li>
      </ul>
    `,
    screenshots: [
      'scr-settings-profile',
      'scr-settings-autosync',
      'scr-settings-provinces',
      'scr-settings-addresses',
      'scr-settings-addresses-add'
    ]
  },
  {
    id: 'workflow',
    number: '07',
    shortTitle: '商户履约工作流',
    title: '完整商户履约交互全流程 (Workflow)',
    subtitle: '从打开插件、账号鉴权、订单审核、批量打单到轨迹追踪的 8 阶段闭环。',
    badge: '交互流程',
    contentHtml: `
      <p>极兔速递 Shopify 插件涵盖履约全生命周期的八个标准步骤。您可以通过下方生动直观的交互式步进器，查看每一步骤的关键操作项、字段校验逻辑与对应的实机操作截图。</p>
      <div id="interactive-workflow-mount"></div>
    `,
    screenshots: [
      'scr-overview-guide',
      'scr-settings-profile',
      'scr-orders-main',
      'scr-orders-edit',
      'scr-orders-bulk',
      'scr-shipments-tracking'
    ]
  },
  {
    id: 'troubleshooting-faq',
    number: '08',
    shortTitle: '常见问题 (FAQs)',
    title: '常见问题与故障诊断 (FAQs)',
    subtitle: '真实业务场景下的高频疑问解答与标准化排障指引。',
    badge: '排错诊断',
    contentHtml: `
      <p>点击任意问题即可展开查验基于真实系统特性的排错与处理方案：</p>

      <div class="accordion-list">
        <div class="accordion-item" data-faq="print-fail">
          <button class="accordion-trigger">
            <span>为什么我的 "Print waybill" 按钮是灰色的，或者点击没有反应？</span>
            <span class="accordion-chevron">▼</span>
          </button>
          <div class="accordion-content">
            <p><span class="ui-term">Print waybill</span> 打印按钮需要同时满足两个前提条件：</p>
            <ol style="margin: 8px 0 8px 20px;">
              <li>必须勾选目标订单行前端的复选框。</li>
              <li>该订单必须已经成功向极兔提交发货，订单状态必须为 <span class="status-pill placed">Placed</span>，且 Tracking no. 列已经生成了真实的单号（如 <span class="ui-term">UEG...</span>）。</li>
            </ol>
            <p>如果订单状态依然为 <span class="status-pill synced">Synced</span>，请先勾选订单并点击红色的 <span class="ui-term primary">Deliver with J&T</span> 提交下单，生成运单号后再点击打印面单。</p>
          </div>
        </div>

        <div class="accordion-item" data-faq="send-failed">
          <button class="accordion-trigger">
            <span>订单确认状态显示为 "Send failed"（发货失败），该如何解决？</span>
            <span class="accordion-chevron">▼</span>
          </button>
          <div class="accordion-content">
            <p>当订单缺少承运商 API 校验所需的必填信息时，会返回 <span class="status-pill failed">Send failed</span>。处理步骤：</p>
            <ol style="margin: 8px 0 8px 20px;">
              <li>点击该订单行最右侧的<strong>编辑图标（铅笔）</strong>，打开 <span class="ui-term">Edit Order</span> 弹窗。</li>
              <li>确保收件人与发件人的 <span class="ui-term">Province</span>（省）、<span class="ui-term">City</span>（市）、<span class="ui-term">Area</span>（区）是从系统下拉菜单中选取的合规行政区划，不能输入无法识别的自由文本。</li>
              <li>检查包裹总重量 <span class="ui-term">Item Weight (kg)</span> 是否已填写且大于 0（例如填入 1）。</li>
              <li>点击 <span class="ui-term primary">Save</span> 保存，返回列表重新勾选该订单，再次点击 <span class="ui-term primary">Deliver with J&T</span> 即可成功。</li>
            </ol>
          </div>
        </div>

        <div class="accordion-item" data-faq="sync-modified">
          <button class="accordion-trigger">
            <span>在 Shopify 后台修改了已有订单的地址，为什么极兔插件没有同步过来？</span>
            <span class="accordion-chevron">▼</span>
          </button>
          <div class="accordion-content">
            <p><strong>Auto Syncing（自动同步）机制仅对在 Shopify 中新创建的订单生效。</strong> 如果买家在下单后联系客服更改了电话或送货地址，Shopify 不会自动推送改单事件给插件。商家此时必须进入极兔插件的 <span class="ui-term">Orders</span> 页面，手动点击顶部操作栏的 <span class="ui-term">Sync your orders</span>，即可强制刷新并覆盖最新数据。</p>
          </div>
        </div>

        <div class="accordion-item" data-faq="cancel-mismatch">
          <button class="accordion-trigger">
            <span>为什么在 Shopify 中取消了订单，极兔的运单依然存在并未取消？</span>
            <span class="accordion-chevron">▼</span>
          </button>
          <div class="accordion-content">
            <p>Shopify 与 J&T Express 的订单取消属于<strong>两套完全独立的系统机制</strong>，且自动取消同步功能仍在研发中。如果您在 Shopify 后台取消了交易，极兔系统内已生成的单号并不会联动取消。要取消极兔运单，请务必在插件的 <span class="ui-term">Orders</span> 页面找到该单，点击末尾的三点菜单（<span class="ui-term">...</span>），选择 <span class="ui-term">Cancel order</span> 进行主动撤单。</p>
          </div>
        </div>

        <div class="accordion-item" data-faq="auto-sync-provinces">
          <button class="accordion-trigger">
            <span>自动同步设置里的省份筛选逻辑是怎样的？</span>
            <span class="accordion-chevron">▼</span>
          </button>
          <div class="accordion-content">
            <p>在 <span class="ui-term">Settings → Auto syncing</span> 页面：</p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>如果<strong>未勾选任何省份</strong>：系统将自动同步全埃及<em>所有 27 个省份</em>的新增订单。</li>
              <li>如果<strong>勾选了部分省份</strong>（例如仅勾选了 Giza、Alexandria）：系统将只自动同步目的地属于这些省份的订单。配送到其他省份的订单将不会自动进入插件，需商家手动管理。</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    screenshots: [
      'scr-orders-filter',
      'scr-orders-edit',
      'scr-orders-details',
      'scr-settings-autosync'
    ]
  },
  {
    id: 'important-notes',
    number: '09',
    shortTitle: '关键规则与注意事项',
    title: '关键规则与注意事项 (Important Notes)',
    subtitle: '每位商家都必须牢记的核心业务底线，避免履约异常。',
    badge: '业务红线',
    contentHtml: `
      <div class="callout danger">
        <div class="callout-icon">🚨</div>
        <div class="callout-body">
          <div class="callout-title">1. 取消机制双向独立原则</div>
          <div class="callout-text">在 Shopify 后台取消订单<strong>绝不会</strong>联动取消极兔运单。同样，在 J&T 插件中点击 <span class="ui-term">Cancel order</span> 也<strong>不会</strong>更改 Shopify 店铺内的订单状态。自动同步取消订单功能目前处于开发测试阶段，遇到取消订单请务必在双方系统中分别手动处理。</div>
        </div>
      </div>

      <div class="callout warning">
        <div class="callout-icon">⚠️</div>
        <div class="callout-body">
          <div class="callout-title">2. 历史订单变动需手动重新同步</div>
          <div class="callout-text"><span class="ui-term">Auto syncing</span> 仅对<em>新生成</em>的 Shopify 订单生效。任何对既有旧订单的编辑或修改（更改电话、修改收货地址、增删商品条目）都无法自动传输，必须在 Orders 页面主动点击 <span class="ui-term">Sync your orders</span> 重新拉取。</div>
        </div>
      </div>

      <div class="callout info">
        <div class="callout-icon">ℹ️</div>
        <div class="callout-body">
          <div class="callout-title">3. 发货前必须保证重量与三级地址完整</div>
          <div class="callout-text">在点击 <span class="ui-term primary">Deliver with J&T</span> 之前，请务必核实包裹总重量 <span class="ui-term">Item Weight (kg)</span> 不得为 0 或空，且省市区三级地址已通过下拉列表完成正规标定，否则极兔接口将抛出 <span class="status-pill failed">Send failed</span> 拦截报错。</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✅</div>
        <div class="callout-body">
          <div class="callout-title">4. 自动打上 J&T_synced 标记标签</div>
          <div class="callout-text">当订单成功从 Shopify 同步至极兔插件后，系统会自动在 Shopify Admin 原生订单上追加打上 <span class="ui-term">J&T_synced</span> 标签，商家可以直接在 Shopify 后台以此标签快速筛选与统计已导入极兔的订单批次。</div>
        </div>
      </div>
    `,
    screenshots: [
      'scr-orders-edit-note',
      'scr-shopify-orders',
      'scr-settings-autosync'
    ]
  }
];

