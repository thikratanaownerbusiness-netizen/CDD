import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-32 pb-20 bg-surface">
      <div className="content-width">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-display font-bold text-slate-900">Partner with <span className="text-primary italic">CDD Global.</span></h1>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Ready to transform your institution's curriculum? Get in touch with our specialist team for a consultation.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Main Office</h4>
                  <p className="text-slate-500 text-sm">123 Academic Plaza, Education District, Global City</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Enquiries</h4>
                  <p className="text-slate-500 text-sm">partnership@cddglobal.edu</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Direct Line</h4>
                  <p className="text-slate-500 text-sm">+85581849727</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="p-8 shadow-xl border-slate-100 rounded-[24px]">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Name</label>
                    <Input placeholder="John Doe" className="rounded-xl h-11 border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                    <Input placeholder="john@university.edu" className="rounded-xl h-11 border-slate-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Institution</label>
                  <Input placeholder="Name of University / School" className="rounded-xl h-11 border-slate-200" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">How can we help?</label>
                  <Textarea placeholder="Describe your curriculum goals..." className="rounded-xl min-h-[120px] border-slate-200" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12 font-bold flex items-center justify-center space-x-2">
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
