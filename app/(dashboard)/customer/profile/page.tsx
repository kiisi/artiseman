"use client";

import React, { useState } from "react";
import { User, Lock, MapPin, Bell, Shield, Camera } from "lucide-react";
import { Avatar } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import { currentUser } from "@/lib/dashboard-mock-data";
import Switch from "@/app/components/ui/switch";

export default function ProfileSettingsPage() {
  const [activeTab, setActiveTab] = useState<"personal" | "security" | "addresses" | "notifications">("personal");

  const [notificationPref, setNotificationPref] = useState([
    { title: "Booking Updates", desc: "Get notified when artisan accepts or changes a booking.", checked: false },
    { title: "Messages", desc: "Receive notifications for new chat messages.", checked: false },
    { title: "Promotions & Offers", desc: "Hear about discounts and special deals.", checked: false },
    { title: "Account Activity", desc: "Security alerts and login notifications.", checked: false },
  ])

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-12">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Profile Settings</h1>
        <p className="text-sm text-neutral-500 mt-1">Manage your account settings and preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Navigation */}
        <div className="w-full md:w-64 shrink-0">
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => setActiveTab("personal")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left ${activeTab === "personal" ? "bg-primary-50 text-primary" : "text-neutral-600 hover:bg-neutral-50"
                }`}
            >
              <User className="w-4 h-4" /> Personal Info
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left ${activeTab === "security" ? "bg-primary-50 text-primary" : "text-neutral-600 hover:bg-neutral-50"
                }`}
            >
              <Lock className="w-4 h-4" /> Security
            </button>
            <button
              onClick={() => setActiveTab("addresses")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left ${activeTab === "addresses" ? "bg-primary-50 text-primary" : "text-neutral-600 hover:bg-neutral-50"
                }`}
            >
              <MapPin className="w-4 h-4" /> Saved Addresses
            </button>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left ${activeTab === "notifications" ? "bg-primary-50 text-primary" : "text-neutral-600 hover:bg-neutral-50"
                }`}
            >
              <Bell className="w-4 h-4" /> Notifications
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-[var(--radius-xl)] border border-border p-6 md:p-8 shadow-sm">

          {activeTab === "personal" && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-lg font-bold text-foreground border-b border-border pb-4 mb-6">Personal Information</h2>

              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <Avatar name={currentUser.name} size="xl" className="w-24 h-24 text-2xl" />
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-white border border-border rounded-full flex items-center justify-center text-neutral-600 hover:text-primary hover:border-primary transition-colors shadow-sm">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Profile Picture</h3>
                  <p className="text-xs text-neutral-500 mt-1 mb-2">PNG, JPG under 5MB</p>
                  <Button variant="outline" size="sm">Remove Picture</Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
                  <input type="text" defaultValue={currentUser.name.split(" ")[0]} className="w-full h-11 px-3 text-sm bg-white border border-border rounded-[var(--radius-md)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
                  <input type="text" defaultValue={currentUser.name.split(" ")[1]} className="w-full h-11 px-3 text-sm bg-white border border-border rounded-[var(--radius-md)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                  <input type="email" defaultValue={currentUser.email} className="w-full h-11 px-3 text-sm bg-neutral-50 border border-border rounded-[var(--radius-md)] text-neutral-500 cursor-not-allowed" disabled />
                  <p className="text-xs text-neutral-400 mt-1">To change your email, please contact support.</p>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <input type="tel" defaultValue="+234 800 000 0000" className="w-full h-11 px-3 text-sm bg-white border border-border rounded-[var(--radius-md)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button>Save Changes</Button>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-lg font-bold text-foreground border-b border-border pb-4 mb-6">Security Settings</h2>

              <div className="space-y-4">
                <h3 className="font-semibold text-sm text-foreground">Change Password</h3>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full h-11 px-3 text-sm bg-white border border-border rounded-[var(--radius-md)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full h-11 px-3 text-sm bg-white border border-border rounded-[var(--radius-md)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Confirm New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full h-11 px-3 text-sm bg-white border border-border rounded-[var(--radius-md)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
              </div>

              <hr className="border-border my-6" />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" /> Two-Factor Authentication
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">Add an extra layer of security to your account.</p>
                </div>
                <Button variant="outline">Enable 2FA</Button>
              </div>

              <div className="flex justify-end pt-4 mt-6">
                <Button>Update Password</Button>
              </div>
            </div>
          )}

          {activeTab === "addresses" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                <h2 className="text-lg font-bold text-foreground">Saved Addresses</h2>
                <Button size="sm">Add New</Button>
              </div>

              <div className="grid gap-4">
                <div className="border border-primary bg-primary-50/30 rounded-xl p-4 flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-sm text-foreground">Home</h3>
                        <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Default</span>
                      </div>
                      <p className="text-sm text-neutral-600">12 Akin Adesola Street</p>
                      <p className="text-sm text-neutral-600">Victoria Island, Lagos</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-xs font-medium text-primary hover:underline">Edit</button>
                  </div>
                </div>

                <div className="border border-border bg-white rounded-xl p-4 flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm text-foreground mb-1">Office</h3>
                      <p className="text-sm text-neutral-600">Landmark Towers</p>
                      <p className="text-sm text-neutral-600">Water Corporation Drive, VI</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-xs font-medium text-neutral-500 hover:text-foreground">Edit</button>
                    <button className="text-xs font-medium text-danger hover:underline">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-lg font-bold text-foreground border-b border-border pb-4 mb-6">Notification Preferences</h2>

              <div className="space-y-6">
                {notificationPref.map((item, i) => (
                  <div key={i} className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-[16px] text-foreground">{item.title}</h3>
                      <p className="text-[14px] text-neutral-500 mt-0.5">{item.desc}</p>
                    </div>
                    <div>
                      <Switch
                        checked={item.checked}
                        onCheckedChange={() => {
                          setNotificationPref((prev) => {
                            return prev.map(data => {
                              if (data.title === item.title) {
                                return {
                                  ...data,
                                  checked: !data.checked
                                }
                              }
                              return data
                            })
                          })
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .toggle-checkbox:checked { right: 0; border-color: var(--color-primary); }
        .toggle-checkbox:checked + .toggle-label { background-color: var(--color-primary); }
        .toggle-checkbox { right: 20px; z-index: 1; }
      `}} />
    </div>
  );
}
