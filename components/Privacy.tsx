import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "key-updates", title: "Key Updates" },
    { id: "information-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Information" },
    { id: "information-share", title: "Information You And We Share" },
    { id: "assignment", title: "Assignment, Change Of Control, And Transfer" },
    { id: "managing-retaining", title: "Managing And Retaining Your Information" },
    { id: "law-rights", title: "Law, Our Rights, And Protection" },
    { id: "updates", title: "Updates To Our Policy" },
    { id: "contact", title: "Contact Us" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900">Clavel.ai Privacy Policy</h1>
                    <p className="text-muted-foreground">Last updated: 24/06/2025</p>
                  </div>

                  <Separator />

                  {/* Introduction */}
                  <section id="introduction" className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        Our Privacy Policy {"("}"Privacy Policy{")"} helps explain our data practices, including the
                        information we process to provide our Services.
                      </p>
                      <p>
                        For example, our Privacy Policy talks about what information we collect and how this affects
                        you. It also explains the steps we take to protect your privacy, like building our Services so
                        delivered messages aren't stored by us and giving you control over who you communicate with on
                        our Services.
                      </p>
                      <p>
                        This Privacy Policy applies to all of our Services unless specified otherwise. Please also read
                        Clavel.ai's Terms of Service {"("}"Terms{")"}, which describe the terms under which you use and
                        we provide our Services.
                      </p>
                    </div>
                  </section>

                  <Separator />

                  {/* Key Updates */}
                  <section id="key-updates" className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Key Updates</h2>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        Respect for your privacy is coded into our DNA. Since we started Clavel.ai, we've built our
                        services with a set of strong privacy principles in mind. In our updated Terms of Service and
                        Privacy Policy you'll find:
                      </p>
                      <ul className="space-y-3">
                        <li>
                          <strong>Additional Information On How We Handle Your Data.</strong> Our updated Terms and
                          Privacy Policy provide more information on how we process your data, and our commitment to
                          privacy. For example, we've added more information about more recent product features and
                          functionalities, how we process your data for safety, security, and integrity, and added more
                          direct links to user settings, Help Center articles and how you can manage your information.
                        </li>
                        <li>
                          <strong>Better Communication With Businesses.</strong> Many businesses rely on Clavel.ai to
                          communicate with their customers and clients. We work with businesses that use Meta or third
                          parties to help store and better manage their communications with you on Clavel.ai.
                        </li>
                      </ul>
                    </div>
                  </section>

                  <Separator />

                  {/* Information We Collect */}
                  <section id="information-collect" className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        Clavel.ai must receive or collect some information to operate, provide, improve, understand,
                        customize, support, and market our Services, including when you install, access, or use our
                        Services.
                      </p>
                      <p>
                        The types of information we receive and collect depend on how you use our Services. We require
                        certain information to deliver our Services and without this we will not be able to provide our
                        Services to you.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Information You Provide</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Your Account Information</h4>
                            <p className="text-gray-600">
                              You must provide your mobile phone number and basic information {"("}including a profile
                              name of your choice{")"} to create a Clavel.ai account. You can add other information to
                              your account, such as a profile picture and "about" information.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Your Messages</h4>
                            <p className="text-gray-600 mb-3">
                              We do not retain your messages in the ordinary course of providing our Services to you.
                              Instead, your messages are stored on your device and not typically stored on our servers.
                              Once your messages are delivered, they are deleted from our servers.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                              <div className="flex">
                                <div className="ml-3">
                                  <h5 className="text-sm font-medium text-blue-800">End-to-End Encryption</h5>
                                  <p className="mt-1 text-sm text-blue-700">
                                    Your privacy is our priority. With end-to-end encryption, your personal messages,
                                    photos, calls and more stay between you and the people you choose, meaning not even
                                    Clavel.ai can see them.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Your Connections</h4>
                            <p className="text-gray-600">
                              You can use the contact upload feature and provide us with the phone numbers in your
                              address book. You can create, join, or get added to groups and broadcast lists.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                          Automatically Collected Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-700 mb-2">Usage & Log Information</h4>
                            <p className="text-sm text-gray-600">
                              Information about your activity, log files, diagnostic reports, and performance data.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-700 mb-2">Device & Connection</h4>
                            <p className="text-sm text-gray-600">
                              Hardware model, operating system, battery level, signal strength, and network information.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-700 mb-2">Location Information</h4>
                            <p className="text-sm text-gray-600">
                              Precise location with your permission for location-related features.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-700 mb-2">Cookies</h4>
                            <p className="text-sm text-gray-600">
                              Used to operate services, improve experiences, and customize content.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* How We Use Information */}
                  <section id="how-we-use" className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">How We Use Information</h2>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        We use information we have {"("}subject to choices you make and applicable law{")"}
                        to operate, provide, improve, understand, customize, support, and market our Services.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div className="text-center p-6 border rounded-lg">
                          <h3 className="font-semibold text-lg mb-3">Our Services</h3>
                          <p className="text-sm text-gray-600">
                            Operating and providing services, customer support, improvements, and troubleshooting.
                          </p>
                        </div>
                        <div className="text-center p-6 border rounded-lg">
                          <h3 className="font-semibold text-lg mb-3">Safety & Security</h3>
                          <p className="text-sm text-gray-600">
                            Verifying accounts, combating harmful conduct, and promoting safety and integrity.
                          </p>
                        </div>
                        <div className="text-center p-6 border rounded-lg">
                          <h3 className="font-semibold text-lg mb-3">Business Interactions</h3>
                          <p className="text-sm text-gray-600">
                            Enabling communication with businesses, catalogs, and transaction notifications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Information Sharing */}
                  <section id="information-share" className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Information You And We Share</h2>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        You share your information as you use and communicate through our Services, and we share your
                        information to help us operate, provide, improve, understand, customize, support, and market our
                        Services.
                      </p>
                      <ul className="space-y-2">
                        <li>
                          <strong>Send Your Information:</strong> You share information as you communicate through our
                          Services.
                        </li>
                        <li>
                          <strong>Account Information:</strong> Your phone number, profile name and photo are available
                          to other users.
                        </li>
                        <li>
                          <strong>Your Contacts:</strong> Users can store or reshare your information with others on and
                          off our Services.
                        </li>
                      </ul>
                    </div>
                  </section>

                  <Separator />

                  {/* Managing Information */}
                  <section id="managing-retaining" className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Managing And Retaining Your Information</h2>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        You can access or port your information using our in-app Request Account Info feature. We store
                        information for as long as necessary for the purposes identified in this Privacy Policy.
                      </p>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                        <h4 className="font-medium text-yellow-800 mb-2">Managing Your Data</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Change Services settings to manage information visibility</li>
                          <li>• Update mobile phone number, profile name, and picture</li>
                          <li>• Delete your Clavel.ai account using in-app feature</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Legal */}
                  <section id="law-rights" className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Law, Our Rights, And Protection</h2>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        We access, preserve, and share your information if we have a good-faith belief that it is
                        necessary to:
                      </p>
                      <ul className="space-y-1">
                        <li>
                          {"("}a{")"} Respond pursuant to applicable law or regulations
                        </li>
                        <li>
                          {"("}b{")"} Enforce our Terms and applicable policies
                        </li>
                        <li>
                          {"("}c{")"} Detect, investigate, prevent fraud and illegal activity
                        </li>
                        <li>
                          {"("}d{")"} Protect rights, property, and safety of users and Clavel.ai
                        </li>
                      </ul>
                    </div>
                  </section>

                  <Separator />

                  {/* Updates */}
                  <section id="updates" className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Updates To Our Policy</h2>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        We may amend or update our Privacy Policy. We will provide you notice of amendments to this
                        Privacy Policy, as appropriate, and update the "Effective Date" at the top of this Privacy
                        Policy.
                      </p>
                    </div>
                  </section>

                  <Separator />

                  {/* Contact */}
                  <section id="contact" className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <p className="text-gray-600 mb-4">
                        If you have questions about this Privacy Policy, please contact us.
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium">Clavel.ai Support</p>
                        <p className="text-sm text-gray-500">support@clavel.ai</p>
                      </div>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
