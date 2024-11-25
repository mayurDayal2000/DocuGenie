import { FeatureCard } from "@/components/FeatureCard";
import { Step } from "@/components/Step";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, GitBranch, Github } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const openExternalLink = () =>
    window.open("https://github.com/apps/docugeniedev");

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>DocuGenie | Home</title>
      </Head>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-500">DocuGenie</div>
          <nav className="space-x-4">
            <Link
              href="#features"
              className="hover:text-purple-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-purple-400 transition-colors"
            >
              How it Works
            </Link>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Your Personal Documentation{" "}
              <span className="text-purple-500">Genie</span>
            </h1>
            <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
              Automatically generate changelogs and README files to keep your
              GitHub repositories organized and up-to-date.
            </p>
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white"
              onClick={openExternalLink}
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </section>

          {/* Features section */}
          <section id="features" className="bg-gray-800 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Github className="w-12 h-12 text-purple-500" />}
                  title="GitHub Integration"
                  description="Seamlessly connects with your GitHub repositories for instant documentation updates."
                />
                <FeatureCard
                  icon={<FileText className="w-12 h-12 text-purple-500" />}
                  title="Automatic README Generation"
                  description="Creates comprehensive README files tailored to your project structure and content."
                />
                <FeatureCard
                  icon={<GitBranch className="w-12 h-12 text-purple-500" />}
                  title="Smart Changelogs"
                  description="Generates detailed changelogs based on your commit history and pull requests."
                />
              </div>
            </div>
          </section>

          {/* How it works section */}
          <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                How It Works
              </h2>
              <div className="max-w-3xl mx-auto">
                <Step
                  number={1}
                  title="Connect Your Repository"
                  description="Link DocuGenie to your GitHub account and select the repositories you want to manage."
                />
                <Step
                  number={2}
                  title="Customize Your Preferences"
                  description="Set your documentation preferences and choose the elements you want to include."
                />
                <Step
                  number={3}
                  title="Let DocuGenie Work Its Magic"
                  description="Our AI analyzes your codebase and generates comprehensive documentation automatically."
                />
                <Step
                  number={4}
                  title="Review and Publish"
                  description="Review the generated documentation, make any final tweaks, and publish with one click."
                />
              </div>
            </div>
          </section>

          {/* CTA section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Streamline Your Documentation?
              </h2>
              <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
                Join hundreds of developers who are saving time and improving
                their project documentation with DocuGenie.
              </p>
              <Button
                size="lg"
                className="bg-purple-500 hover:bg-purple-600 text-white"
                onClick={openExternalLink}
              >
                Get Started for Free <ArrowRight className="ml-2" />
              </Button>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2023 DocuGenie. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
