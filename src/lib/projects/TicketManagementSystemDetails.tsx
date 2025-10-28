
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Project } from '../projectsData';
import { Badge } from '@/components/ui/badge';
import {
  Smartphone,
  Shield,
  Server,
  Zap,
  DollarSign,
  BarChart2,
  Mail,
  MapPin,
  MessageSquare,
  Activity,
  Database,
  Code,
  Workflow,
} from 'lucide-react';

interface TicketManagementSystemDetailsProps {
  project: Project;
}

const TicketManagementSystemDetails: React.FC<TicketManagementSystemDetailsProps> = ({ project }) => {
  return (
  <div className="w-full max-w-full mx-auto p-4 overflow-x-hidden box-border">
      {/* Mobile-first layout - different from desktop: stacked, top carousel, collapsible sections */}
  <div className="md:hidden min-w-0">
        <h1 className="text-2xl font-bold mb-1">{project.title}</h1>
        <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>

  <div className="flex flex-wrap gap-2 mb-4 min-w-0 overflow-hidden">
          <Badge variant="default" className="bg-blue-600 text-white">Full-Stack</Badge>
          <Badge variant="default" className="bg-purple-600 text-white">Real-Time</Badge>
          <Badge variant="default" className="bg-green-600 text-white">Multi-Tenant</Badge>
          <Badge variant="default" className="bg-orange-600 text-white">Mobile-First</Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

        {/* Architecture Cards: Backend API, Admin Dashboard, Mobile App - stack on mobile */}
        <div className="space-y-3 mb-4">
          <Card className="border-blue-500 border-l-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <Server className="w-5 h-5" />
                Backend API
              </CardTitle>
              <p className="text-xs text-muted-foreground font-normal">Node.js + Express + MongoDB</p>
            </CardHeader>
            <CardContent>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• REST & GraphQL API</li>
                <li>• Socket.IO real-time</li>
                <li>• JWT + HMAC security</li>
                <li>• S3 & Razorpay</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-500 border-l-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2 text-purple-700 dark:text-purple-300">
                <Zap className="w-5 h-5" />
                Admin Dashboard
              </CardTitle>
              <p className="text-xs text-muted-foreground font-normal">React 19 + Vite</p>
            </CardHeader>
            <CardContent>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Real-time analytics</li>
                <li>• Ticket management</li>
                <li>• Google Maps tracking</li>
                <li>• Excel export</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-500 border-l-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2 text-green-700 dark:text-green-300">
                <Smartphone className="w-5 h-5" />
                Mobile App
              </CardTitle>
              <p className="text-xs text-muted-foreground font-normal">React Native + Expo</p>
            </CardHeader>
            <CardContent>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Background GPS tracking</li>
                <li>• Real-time notifications</li>
                <li>• Offline-first caching</li>
                <li>• QR code ID cards</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Screenshots Section: Admin Panel & Mobile App unified */}
  <Card className="mb-4 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-base">Screenshots</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {project.screenshots?.admin?.length ? (
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-600" />
                  Admin Dashboard
                </h4>
                <Carousel className="overflow-hidden">
                  <CarouselContent>
                    {project.screenshots.admin.map((screenshot, index) => (
                      <CarouselItem key={index}>
                        <div className="w-full flex items-center justify-center">
                          <img src={screenshot} alt={`Admin Screenshot ${index + 1}`} className="max-w-full max-h-80 object-contain rounded" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            ) : null}

            {project.screenshots?.mobile?.length ? (
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-green-600" />
                  Mobile App
                </h4>
                <Carousel className="overflow-hidden">
                  <CarouselContent>
                    {project.screenshots.mobile.map((screenshot, i) => (
                      <CarouselItem key={i}>
                        <div className="w-full flex items-center justify-center">
                          <img src={screenshot} alt={`Mobile ${i + 1}`} className="max-w-full max-h-80 object-contain rounded" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            ) : null}
          </CardContent>
        </Card>

        {/* Additional content cards */}
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Core Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Automated Email-to-Ticket processing</li>
                <li>Real-time engineer tracking with background GPS</li>
                <li>Socket.IO chat with file sharing</li>
                <li>Intelligent ticket workflow</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Analytics & Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Real-time KPIs, Excel exports, and dual payment gateways (Stripe + Razorpay) with automated invoicing.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Summary & Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">FieldSync reduced ticket creation from minutes to instant via email automation, provides real-time visibility for 100+ engineers, and enterprise-grade security.</p>
              <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
                <li>90% faster ticket creation</li>
                <li>Instant communication</li>
                <li>Scalable multi-tenant architecture</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Desktop / md+ layout - keep the richer grid and cards */}
  <div className="hidden md:block min-w-0">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2 break-words">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{project.subtitle}</p>
          <div className="flex flex-wrap gap-2 min-w-0 overflow-hidden">
            <Badge variant="default" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white whitespace-normal">Full-Stack Development</Badge>
            <Badge variant="default" className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">Real-Time Architecture</Badge>
            <Badge variant="default" className="bg-gradient-to-r from-green-600 to-green-700 text-white">Multi-Tenant SaaS</Badge>
            <Badge variant="default" className="bg-gradient-to-r from-red-600 to-red-700 text-white">B2B Platform</Badge>
            <Badge variant="default" className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">Mobile-First</Badge>
          </div>
        </div>

        <p className="mb-6 text-muted-foreground">{project.description}</p>

  <div className="grid md:grid-cols-3 gap-6 my-8 min-w-0">
          <Card className="border-blue-500 border-2 shadow-xl hover:shadow-2xl transition-shadow overflow-hidden min-w-0">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <CardTitle className="flex items-center gap-3 text-blue-700 dark:text-blue-300">
                <Server className="w-8 h-8" />
                <div>
                  <div className="text-lg">Backend API</div>
                  <div className="text-xs font-normal text-muted-foreground">Node.js + Express + MongoDB</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="text-xs space-y-1.5 text-muted-foreground">
                <li>• REST & GraphQL hybrid API</li>
                <li>• Socket.IO real-time events</li>
                <li>• Multi-layer security (Helmet, HMAC, Rate limiting)</li>
                <li>• JWT auth with token blacklisting</li>
                <li>• AWS S3 + Cloudinary file storage</li>
                <li>• Stripe & Razorpay integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-500 border-2 shadow-xl hover:shadow-2xl transition-shadow overflow-hidden min-w-0">
            <CardHeader className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
              <CardTitle className="flex items-center gap-3 text-purple-700 dark:text-purple-300">
                <Zap className="w-8 h-8" />
                <div>
                  <div className="text-lg">Admin Dashboard</div>
                  <div className="text-xs font-normal text-muted-foreground">React + Vite</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="text-xs space-y-1.5 text-muted-foreground">
                <li>• Real-time analytics dashboard</li>
                <li>• Ticket lifecycle management</li>
                <li>• Google Maps engineer tracking</li>
                <li>• Excel bulk import/export</li>
                <li>• Multi-tenant company management</li>
                <li>• Dark mode + Responsive design</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-500 border-2 shadow-xl hover:shadow-2xl transition-shadow overflow-hidden min-w-0">
            <CardHeader className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
              <CardTitle className="flex items-center gap-3 text-green-700 dark:text-green-300">
                <Smartphone className="w-8 h-8" />
                <div>
                  <div className="text-lg">Mobile App</div>
                  <div className="text-xs font-normal text-muted-foreground">React Native + Expo</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="text-xs space-y-1.5 text-muted-foreground">
                <li>• Background GPS location tracking</li>
                <li>• Real-time ticket notifications</li>
                <li>• Secure authentication (Expo Secure Store)</li>
                <li>• Offline-first data caching</li>
                <li>• File upload with progress tracking</li>
                <li>• Digital ID cards with QR codes</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Rich Desktop-Only Content Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-4">🎯 The Problem FieldSync Solves</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground"><strong>Manual Ticket Creation:</strong> 5-10 minutes per ticket, prone to errors</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground"><strong>Zero Visibility:</strong> No idea where engineers are or job status</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground"><strong>Communication Chaos:</strong> Phone calls, SMS, WhatsApp scattered everywhere</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground"><strong>Payment Tracking:</strong> Manual invoicing and payment reconciliation</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">💎 Core Features</h2>

        <Card className="mb-6 border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Mail className="w-5 h-5 text-blue-500" /> Automated Email-to-Ticket System</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Zero manual data entry. Emails sent to a dedicated inbox are automatically parsed and converted to tickets in seconds.</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>Mailslurp + IMAP:</strong> Monitors dedicated inbox in real-time</li>
              <li><strong>Smart Parsing:</strong> Extracts sender, subject, body, attachments using mailparser</li>
              <li><strong>Auto-Assignment:</strong> Matches sender email to company and assigns ticket</li>
              <li><strong>Result:</strong> Ticket creation time reduced from 5-10 minutes to <strong>instant</strong></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><MapPin className="w-5 h-5 text-green-500" /> Real-Time Location Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Background GPS tracking continues even when app is closed or backgrounded with battery optimization.</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>Expo Location + Task Manager:</strong> Native background location services</li>
              <li><strong>Smart Updates:</strong> Triggers on 10m distance change OR every 5 seconds</li>
              <li><strong>Admin Dashboard:</strong> Live Google Maps showing all active engineers, location history, proximity alerts</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><MessageSquare className="w-5 h-5 text-purple-500" /> Real-Time Chat System</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Socket.IO-powered messaging with file sharing, typing indicators, and read receipts.</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>Room Architecture:</strong> Ticket-based chat rooms + direct messaging</li>
              <li><strong>Rich Media:</strong> Images, PDFs, documents stored on AWS S3 (up to 50MB)</li>
              <li><strong>Features:</strong> File uploads, message delivery status, typing indicators, conversation history across web and mobile</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Database className="w-5 h-5 text-orange-500" /> Multi-Tenant Data Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Complex Mongoose schemas with company-scoped queries ensuring complete data isolation between tenants.</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><strong>Security:</strong> Helmet.js CSP, HSTS headers, HMAC validation, JWT with refresh tokens, Bcrypt (12 rounds)</li>
              <li><strong>RBAC:</strong> 5 role types (Admin, Manager, Company Admin, Supervisor, Engineer) with middleware-enforced permissions</li>
              <li><strong>Audit Trail:</strong> Complete logging of every ticket action (created, assigned, status changed)</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">📊 Technical Achievements</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Code className="w-5 h-5 text-blue-500" /> Architecture & Scale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div>✅ <strong>40,000+ lines</strong> of production code across backend, web, and mobile</div>
              <div>✅ <strong>13 custom middleware</strong> modules for security, auth, validation</div>
              <div>✅ <strong>5 Mongoose models</strong> with complex relationships and validations</div>
              <div>✅ <strong>12 route modules</strong> + GraphQL schema with resolvers</div>
              <div>✅ <strong>35+ React components</strong> + 15 mobile screens</div>
              <div>✅ <strong>REST + GraphQL + WebSocket</strong> hybrid API architecture</div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Activity className="w-5 h-5 text-green-500" /> Performance & Real-Time</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div>✅ <strong>Socket.IO multiplexing</strong> for instant updates across all clients</div>
              <div>✅ <strong>Pagination</strong> on all list endpoints (handles 100+ records efficiently)</div>
              <div>✅ <strong>Database indexing</strong> on all model fields for faster queries</div>
              <div>✅ <strong>Cloud storage</strong> for 50MB+ files offloaded from app server</div>
              <div>✅ <strong>Background tasks</strong> for location tracking without draining battery</div>
              <div>✅ <strong>Code splitting</strong> and lazy loading in React dashboard</div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><DollarSign className="w-5 h-5 text-red-500" /> Payment & Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div>✅ <strong>Dual Payment Gateways:</strong> Stripe (international) + Razorpay (India/UPI)</div>
              <div>✅ <strong>Automated Invoicing:</strong> On ticket closure with payment reconciliation</div>
              <div>✅ <strong>Real-time KPIs:</strong> WebSocket-powered analytics dashboard with Framer Motion animations</div>
              <div>✅ <strong>Excel Exports:</strong> Filterable reports with ExcelJS</div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Shield className="w-5 h-5 text-purple-500" /> Security & Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div>✅ <strong>Multi-tenant isolation</strong> at database query level</div>
              <div>✅ <strong>RBAC with 5 roles</strong> and middleware-enforced permissions</div>
              <div>✅ <strong>JWT auth</strong> with httpOnly cookies + Secure Store (mobile)</div>
              <div>✅ <strong>HMAC validation</strong> on sensitive operations</div>
              <div>✅ <strong>XSS & SQL injection</strong> prevention on all inputs</div>
              <div>✅ <strong>Rate limiting</strong> per endpoint + IP-based throttling</div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold my-4">Screenshots</h2>
        <Card>
          <CardHeader>
            <CardTitle>Screenshots</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-bold mb-4">Admin Panel</h3>
            {project.screenshots?.admin && (
              <Carousel className="mb-8 overflow-hidden">
                <CarouselContent>
                  {project.screenshots.admin.map((screenshot, index) => (
                    <CarouselItem key={index}>
                      <img src={screenshot} alt={`Admin Screenshot ${index + 1}`} className="w-full h-auto" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            )}

            <h3 className="text-2xl font-bold mb-4">Mobile App</h3>
            {project.screenshots?.mobile && (
              <Carousel className="overflow-hidden">
                <CarouselContent>
                  {project.screenshots.mobile.map((screenshot, index) => (
                    <CarouselItem key={index}>
                      <img src={screenshot} alt={`Mobile Screenshot ${index + 1}`} className="w-full h-auto" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            )}
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold my-4">Summary</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>FieldSync Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">FieldSync is a production-ready, multi-tenant field service platform delivering automated ticket creation, real-time tracking, and enterprise-grade security. Key differentiators: email automation, background GPS, dual payment gateways, Socket.IO real-time updates, and strict multi-tenant isolation.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TicketManagementSystemDetails;
