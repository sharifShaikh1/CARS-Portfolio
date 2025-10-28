# FieldSync: Enterprise Field Service Management Platform

**Full-Stack Development | Real-Time Architecture | Multi-Tenant SaaS | B2B Platform | Mobile-First**

**FieldSync** is a production-grade field service management platform built from scratch to solve real operational challenges. This enterprise SaaS solution handles the complete lifecycle of field operations—from automated ticket creation through email parsing, real-time engineer tracking with background GPS, instant multi-party communication, to secure payment processing across Stripe and Razorpay.

The system manages multiple client companies with strict role-based access control, processes 100+ tickets simultaneously, tracks field engineers in real-time, and maintains bank-grade security with multi-layer protection.

---

## 🎯 The Problem

Field service companies struggle with:
- **Manual ticket creation**: 5-10 minutes per ticket, prone to errors
- **Zero visibility**: No idea where engineers are or job status
- **Communication chaos**: Phone calls, SMS, and WhatsApp scattered everywhere
- **Multi-company complexity**: No unified system for managing multiple clients
- **Payment tracking**: Manual invoicing and payment reconciliation

---

## 🏗️ System Architecture

Three-tier architecture with REST + GraphQL APIs, Socket.IO for real-time communication, and cloud-native file storage.

### Backend API (Node.js + Express + MongoDB)
- REST & GraphQL hybrid API
- Socket.IO real-time events
- Multi-layer security (Helmet, HMAC, Rate limiting)
- JWT auth with token blacklisting
- AWS S3 + Cloudinary file storage
- Stripe & Razorpay integration

### Admin Dashboard (React 19 + Vite)
- Real-time analytics dashboard
- Ticket lifecycle management
- Google Maps engineer tracking
- Excel bulk import/export
- Multi-tenant company management
- Dark mode + Responsive design

### Mobile App (React Native + Expo)
- Background GPS location tracking
- Real-time ticket notifications
- Secure authentication (Expo Secure Store)
- Offline-first data caching
- File upload with progress tracking
- Digital ID cards with QR codes

---

## 💎 Core Features

### Multi-Tenant Data Architecture

**Complex Mongoose schemas with company-scoped queries ensuring complete data isolation between tenants.**

- **Ticket Model**: Interaction logging for audit trails, multi-stage assignment workflow (pending → accepted → rejected), dynamic visibility rules (Draft, Direct Engineer, Service Provider, All Engineers)
- **Role-Based Access Control**: 5 role types (Admin, NetCovet Manager, Company Admin, Supervisor, Engineer) with middleware-enforced permissions
- **Company Scoping**: All database queries filtered by companyId to prevent cross-tenant data leaks

```javascript
// Complete audit trail for every ticket action
interactions: [{
  event: String,      // "Created", "Assigned", "Status Changed"
  actor: String,      // User who performed the action
  timestamp: Date
}]
```

**Security Implementation**:
- Helmet.js with CSP policies + HSTS headers
- Rate limiting (progressive slow-down + hard limits)
- HMAC signature validation on critical endpoints
- MongoDB injection & XSS sanitization on all inputs
- JWT with refresh tokens + blacklist for instant revocation
- Bcrypt password hashing (12 rounds)

---

### Automated Email-to-Ticket System

**Zero manual data entry. Emails sent to dedicated inbox are automatically parsed and converted to tickets.**

- **Mailslurp + IMAP**: Monitors dedicated inbox in real-time
- **Smart Parsing**: Extracts sender, subject, body, attachments using `mailparser`
- **Auto-Assignment**: Matches sender email to company and assigns ticket
- **Error Handling**: Retry logic with admin notifications on failures

```javascript
const processEmails = async () => {
  const messages = await connection.search(['UNSEEN']);
  for (const email of messages) {
    const parsed = await parseEmail(email);
    await createTicket({
      senderEmail: parsed.from,
      subject: parsed.subject,
      description: parsed.body
    });
  }
};
```

**Result**: Ticket creation time reduced from 5-10 minutes to **instant**.

---

### Real-Time Location Tracking

**Background GPS tracking continues even when app is closed or backgrounded.**

- **Expo Location + Task Manager**: Native background location services
- **Smart Updates**: Triggers on 10m distance change OR every 5 seconds
- **Battery Optimized**: Configurable accuracy levels
- **Android Foreground Service**: Persistent notification for compliance

```javascript
await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
  accuracy: Location.Accuracy.High,
  distanceInterval: 10,
  timeInterval: 5000,
  foregroundService: {
    notificationTitle: 'Location Tracking Active'
  }
});
```

**Admin Dashboard**: Live Google Maps showing all active engineers, location history, proximity alerts for job sites.

---

### Real-Time Chat System

**Socket.IO-powered messaging with file sharing, typing indicators, and read receipts.**

- **Room Architecture**: Ticket-based chat rooms + direct messaging
- **Rich Media**: Images, PDFs, documents stored on AWS S3
- **GraphQL Integration**: Message history with efficient pagination
- **Authenticated Sockets**: JWT verification on socket connection

```javascript
io.use(async (socket, next) => {
  const token = extractToken(socket);
  const user = await authenticateToken(token);
  socket.user = user;
  next();
});
```

**Features**: File uploads up to 50MB, message delivery status, typing indicators, conversation history across web and mobile.

---

### Intelligent Ticket Workflow

**Automated status transitions with configurable visibility and pricing rules.**

**Lifecycle**: Draft → Open → In Progress → On-Hold (with reason) → Closed (with remarks)

**Assignment Flow**: 
- Admin assigns → Engineer receives notification → Engineer accepts/rejects → Ticket tracks acceptance count vs required engineers

**Visibility Controls**:
- **Draft**: Only visible to admins
- **Direct Engineer**: Assigned engineer only
- **Service Provider**: All service provider engineers
- **Visible to All**: All available engineers

**Bulk Operations**: Import 100+ tickets from Excel, bulk status updates, automated email notifications.

---

### Analytics Dashboard

**Real-time KPIs with WebSocket updates and Framer Motion animations.**

- **Ticket Metrics**: Open, In-Progress, Closed, On-Hold counts with trend analysis
- **Financial Data**: Total revenue, pending payments, average ticket value
- **Performance**: Average resolution time, engineer acceptance rates
- **Export**: Filterable reports to Excel with ExcelJS

---

### Dual Payment Gateway Integration

**Global payment support with Stripe (international) and Razorpay (India/UPI).**

**Stripe**: Payment intents, webhook handling, automatic reconciliation, refunds
**Razorpay**: UPI payments, order verification, payment links, engineer payouts

**Features**: Automated invoicing on ticket closure, payment status tracking, manual UPI override for offline transactions.

---

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js 20.x + Express.js 4.x
- **Database**: MongoDB Atlas + Mongoose ODM
- **Real-Time**: Socket.IO 4.x with room-based architecture
- **API**: REST + GraphQL (express-graphql)
- **Auth**: JWT with access/refresh tokens + blacklist
- **Storage**: AWS S3 + Cloudinary
- **Payments**: Stripe + Razorpay SDKs
- **Email**: Nodemailer + Mailslurp client
- **Security**: Helmet, express-rate-limit, express-validator, xss-clean, mongo-sanitize
- **Logging**: Winston with file rotation

### Admin Dashboard
- **Framework**: React 19 + Vite 7.x
- **Routing**: React Router v7
- **UI**: Tailwind CSS 3.x + Shadcn/UI + Radix UI
- **Animations**: Framer Motion
- **API Client**: Axios + Apollo Client (GraphQL)
- **Maps**: @react-google-maps/api
- **Utils**: ExcelJS, Socket.IO Client

### Mobile App
- **Framework**: React Native 0.79 + Expo SDK 53
- **Navigation**: React Navigation 6 (Stack + Tabs)
- **Styling**: NativeWind (Tailwind for RN)
- **Location**: expo-location + expo-task-manager
- **Storage**: Expo Secure Store + AsyncStorage
- **Maps**: react-native-maps
- **QR**: react-native-qrcode-svg
- **Auth**: Socket.IO Client for real-time

---

## 📊 Technical Achievements

### Architecture & Scale
- ✅ **40,000+ lines** of production code across backend, web, and mobile
- ✅ **13 custom middleware** modules for security, auth, validation
- ✅ **5 Mongoose models** with complex relationships and validations
- ✅ **12 route modules** + GraphQL schema with resolvers
- ✅ **35+ React components** + 15 mobile screens
- ✅ **REST + GraphQL + WebSocket** hybrid API architecture

### Performance & Real-Time
- ✅ **Socket.IO multiplexing** for instant ticket updates across all clients
- ✅ **Pagination** on all list endpoints (handles 100+ records efficiently)
- ✅ **Database indexing** on companyId, status, assignedPersonnel
- ✅ **Cloud storage** for 50MB+ files offloaded from app server
- ✅ **Background tasks** for location tracking without draining battery
- ✅ **Code splitting** and lazy loading in React dashboard

### Security & Compliance
- ✅ **Multi-tenant isolation** at database query level
- ✅ **RBAC with 5 roles** and middleware-enforced permissions
- ✅ **JWT auth** with httpOnly cookies + Secure Store (mobile)
- ✅ **HMAC validation** on sensitive operations
- ✅ **XSS & SQL injection** prevention on all inputs
- ✅ **Rate limiting** per endpoint + IP-based throttling

### Integrations & Automation
- ✅ **Stripe + Razorpay** dual payment gateway support
- ✅ **Email-to-ticket** automation with Mailslurp + IMAP
- ✅ **Google Maps API** for location services and tracking
- ✅ **AWS S3 + Cloudinary** for scalable file management
- ✅ **Excel import/export** for bulk ticket operations
- ✅ **Push notifications** for mobile job assignments

---

## 📈 Business Impact

**Operational Efficiency**:
- **90% faster** ticket creation through email automation
- **Real-time visibility** into 100+ field engineers simultaneously
- **Instant communication** eliminating phone tag and SMS chaos
- **Automated workflows** reducing manual status updates and data entry

**Scalability**:
- Multi-tenant architecture supporting unlimited client companies
- Stateless API design ready for horizontal scaling
- Cloud storage handling unlimited file uploads
- Database indexing delivering sub-second query performance

---

## 🎨 Code Organization

```
backend/
├── middleware/        # 13 modules: auth, security, validation, rate limiting
├── models/           # 5 Mongoose schemas: User, Ticket, Company, Conversation, Message
├── routes/           # 12 REST endpoints: auth, tickets, users, companies, payments
├── graphql/          # Schema + resolvers for messages/conversations
├── socket/           # Socket.IO chat implementation
├── utils/            # Email processing, logging, database helpers
└── s3.js            # AWS S3 file upload configuration

admin-panel/
├── src/
│   ├── components/   # 35+ reusable components (DashboardHome, TicketTable, UserManagement, ChatLayout)
│   ├── lib/         # API client with Axios interceptors
│   ├── context/     # Auth state + Socket connection management
│   └── config.js    # Environment configuration

mobile-app/
├── screens/         # 15 screens: Login, Home, TicketChat, MapScreen, Payments
├── components/      # 11 components: ActiveTicketCard, ChatMessageBubble, IdCard
├── context/         # AuthContext + SocketContext
├── services/        # Background location task, chat service
└── navigators/      # Stack + Tab navigation setup
```

---

## 📝 Summary

FieldSync is a complete, production-ready SaaS platform demonstrating full-stack development across three codebases. The system handles complex multi-tenant operations, real-time communication, background processing, payment integration, and cloud services—all with enterprise-grade security.

**Key Differentiators**: Email automation, background GPS tracking, dual payment gateways, Socket.IO real-time updates, multi-tenant isolation, role-based access control.

---

## 📸 Screenshots

### Admin Panel

| | | |
|:---:|:---:|:---:|
| ![Admin Panel Screenshot 1](https://via.placeholder.com/800x400.png?text=Admin+Panel+Screenshot+1) | ![Admin Panel Screenshot 2](https://via.placeholder.com/800x400.png?text=Admin+Panel+Screenshot+2) | ![Admin Panel Screenshot 3](https://via.placeholder.com/800x400.png?text=Admin+Panel+Screenshot+3) |
| ![Admin Panel Screenshot 4](https://via.placeholder.com/800x400.png?text=Admin+Panel+Screenshot+4) | ![Admin Panel Screenshot 5](https://via.placeholder.com/800x400.png?text=Admin+Panel+Screenshot+5) | ![Admin Panel Screenshot 6](https://via.placeholder.com/800x400.png?text=Admin+Panel+Screenshot+6) |
| ![Admin Panel Screenshot 7](https://via.placeholder.com/800x400.png?text=Admin+Panel+Screenshot+7) | ![Admin Panel Screenshot 8](https://via.placeholder.com/800x400.png?text=Admin+Panel+Screenshot+8) | ![Admin Panel Screenshot 9](https://via.placeholder.com/800x400.png?text=Admin+Panel+Screenshot+9) |
| ![Admin Panel Screenshot 10](https://via.placeholder.com/800x400.png?text=Admin+Panel+Screenshot+10) | | |

### Mobile App

| | | |
|:---:|:---:|:---:|
| ![Mobile App Screenshot 1](https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+1) | ![Mobile App Screenshot 2](https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+2) | ![Mobile App Screenshot 3](https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+3) |
| ![Mobile App Screenshot 4](https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+4) | ![Mobile App Screenshot 5](https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+5) | ![Mobile App Screenshot 6](https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+6) |
| ![Mobile App Screenshot 7](https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+7) | ![Mobile App Screenshot 8](https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+8) | ![Mobile App Screenshot 9](https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+9) |
| ![Mobile App Screenshot 10](https://via.placeholder.com/400x800.png?text=Mobile+App+Screenshot+10) | | |

