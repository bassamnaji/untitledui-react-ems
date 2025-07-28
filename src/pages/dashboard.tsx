import { ChevronLeft, ChevronRight, InfoCircle, LinkExternal01, SearchLg } from "@untitledui/icons";
import { Calendar } from "@/components/application/date-picker/calendar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { NativeSelect } from "@/components/base/select/select-native";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icons";

const eventFilterOptions = [
    { label: "All Events", value: "all" },
    { label: "Upcoming Events", value: "upcoming" },
    { label: "Past Events", value: "past" },
];

const calendarEvents = [
    { id: 1, title: "Student well being Survey", date: "March 11, 2025", badge: "Public Holiday" },
    { id: 2, title: "School Environment Survey", date: "March 15, 2025", badge: "Academic" },
    { id: 3, title: "Teacher Training Workshop", date: "March 18, 2025", badge: "Training" },
    { id: 4, title: "Parent-Teacher Conference", date: "March 22, 2025", badge: "Meeting" },
    { id: 5, title: "Curriculum Feedback Session", date: "March 25, 2025", badge: "Feedback" },
    { id: 6, title: "School Sports Day", date: "March 28, 2025", badge: "Event" },
    { id: 7, title: "Art Exhibition Opening", date: "April 1, 2025", badge: "Exhibition" },
    { id: 8, title: "Science Fair", date: "April 5, 2025", badge: "Fair" },
];

export const Dashboard = () => {
    return (
        <div className="min-h-screen bg-primary">
            {/* Notification Banner */}
            <div className="border-b border-utility-blue-200 bg-utility-blue-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <FeaturedIcon icon={InfoCircle} theme="light" color="brand" size="sm" />
                            <p className="text-utility-blue-800 text-sm">We've just released a new feature. Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button color="secondary" size="sm">
                                Dismiss
                            </Button>
                            <Button color="primary" size="sm">
                                View changes
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div>
                    <h1 className="text-display-sm font-semibold text-primary">All ADEK Features</h1>
                    <p className="mt-1 text-md text-secondary">Here's your account details and deposits.</p>
                </div>
            </div>

            {/* Main Content */}
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ADEK Systems */}
                <div className="mb-12 rounded-lg border border-secondary bg-primary p-6">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-primary">ADEK Systems</h2>
                        <Button color="link-color" size="sm" iconTrailing={LinkExternal01}>
                            View all Systems
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                        {/* ESis System */}
                        <div className="rounded-lg border border-secondary bg-primary p-4 transition-shadow hover:shadow-sm">
                            <div className="mb-2 flex items-center gap-3">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-utility-blue-600">
                                    <span className="text-sm font-bold text-white">E</span>
                                </div>
                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-medium text-primary">ESis syst...</h3>
                                </div>
                            </div>
                            <p className="text-xs text-tertiary">Link pull requests...</p>
                        </div>

                        {/* PASS System */}
                        <div className="rounded-lg border border-secondary bg-primary p-4 transition-shadow hover:shadow-sm">
                            <div className="mb-2 flex items-center gap-3">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-utility-purple-600">
                                    <span className="text-sm font-bold text-white">P</span>
                                </div>
                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-medium text-primary">PASS syst...</h3>
                                </div>
                            </div>
                            <p className="text-xs text-tertiary">Link pull requests...</p>
                        </div>

                        {/* Scholars System */}
                        <div className="rounded-lg border border-secondary bg-primary p-4 transition-shadow hover:shadow-sm">
                            <div className="mb-2 flex items-center gap-3">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-utility-blue-600">
                                    <span className="text-sm font-bold text-white">S</span>
                                </div>
                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-medium text-primary">Scholars...</h3>
                                </div>
                            </div>
                            <p className="text-xs text-tertiary">Link pull requests...</p>
                        </div>

                        {/* Sport System */}
                        <div className="rounded-lg border border-secondary bg-primary p-4 transition-shadow hover:shadow-sm">
                            <div className="mb-2 flex items-center gap-3">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-utility-blue-600">
                                    <span className="text-sm font-bold text-white">S</span>
                                </div>
                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-medium text-primary">Sport sys...</h3>
                                </div>
                            </div>
                            <p className="text-xs text-tertiary">Link pull requests...</p>
                        </div>

                        {/* Art System */}
                        <div className="rounded-lg border border-secondary bg-primary p-4 transition-shadow hover:shadow-sm">
                            <div className="mb-2 flex items-center gap-3">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-utility-orange-600">
                                    <span className="text-sm font-bold text-white">A</span>
                                </div>
                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-medium text-primary">Art system</h3>
                                </div>
                            </div>
                            <p className="text-xs text-tertiary">Link pull requests...</p>
                        </div>

                        {/* PASS System 2 */}
                        <div className="rounded-lg border border-secondary bg-primary p-4 transition-shadow hover:shadow-sm">
                            <div className="mb-2 flex items-center gap-3">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-utility-purple-600">
                                    <span className="text-sm font-bold text-white">P</span>
                                </div>
                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-medium text-primary">PASS syst...</h3>
                                </div>
                            </div>
                            <p className="text-xs text-tertiary">Link pull requests...</p>
                        </div>
                    </div>
                </div>

                {/* ADEK Events and Calendar Section */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        {/* ADEK Events */}
                        <div className="rounded-lg border border-secondary bg-primary p-6">

                            <div className="mb-6">
                                <h2 className="mb-4 text-xl font-semibold text-primary">ADEK Events</h2>
                                <hr className="border-t border-secondary" />
                            </div>

                            {/* Event Filter Tags */}
                            <div className="mb-6 flex flex-wrap gap-2">
                                <Badge color="gray" size="sm">
                                    AD Sport Cup
                                </Badge>
                                <Badge color="gray" size="sm">
                                    Khotwa
                                </Badge>
                                <Badge color="gray" size="sm">
                                    Parent App
                                </Badge>
                                <Badge color="gray" size="sm">
                                    Art event
                                </Badge>
                                <Badge color="gray" size="sm">
                                    National Identity
                                </Badge>
                                <Badge color="gray" size="sm">
                                    Award
                                </Badge>
                                <Badge color="gray" size="sm">
                                    view more
                                </Badge>
                            </div>

                            {/* Event Cards Carousel */}
                            <div className="relative">
                                <div className="overflow-x-auto">
                                    <div className="flex min-w-max gap-4">
                                        {/* Leaderboard Card */}
                                        <div className="relative w-80 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 text-black">
                                            <div className="relative z-10">
                                                <h3 className="mb-2 text-lg font-semibold">Leaderboard</h3>
                                                <p className="mb-4 text-sm opacity-80">For more information check the Rayah App - Activities</p>
                                                <Button color="secondary" size="sm">
                                                    Learn more
                                                </Button>
                                            </div>
                                            <div className="absolute -top-2 -right-2 opacity-20">
                                                <FeaturedIcon icon={LinkExternal01} theme="light" color="warning" size="xl" />
                                            </div>
                                        </div>

                                        {/* Advertisement Sample Card */}
                                        <div className="relative w-80 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white">
                                            <div className="relative z-10">
                                                <h3 className="mb-2 text-lg font-semibold">Advertisement Sample</h3>
                                                <p className="mb-4 text-sm opacity-90">Advert subtitle runs up to 2 lines</p>
                                                <Button color="secondary" size="sm">
                                                    Discover More
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Additional Cards for Carousel */}
                                        <div className="relative w-80 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white">
                                            <div className="relative z-10">
                                                <h3 className="mb-2 text-lg font-semibold">Training Program</h3>
                                                <p className="mb-4 text-sm opacity-90">Professional development for educators</p>
                                                <Button color="secondary" size="sm">
                                                    Learn more
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4 flex items-center gap-2">
                                <ButtonUtility color="tertiary" size="sm" icon={ChevronLeft} />
                                <ButtonUtility color="tertiary" size="sm" icon={ChevronRight} />
                            </div>
                        </div>

                        {/* Bottom Section - Policies and Catalogues */}
                        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                            {/* ADEK Policies */}
                            <div className="rounded-lg border border-secondary bg-primary p-6">
                                <div className="mb-6 flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-primary">ADEK Policies</h2>
                                </div>
                                <div className="space-y-0">
                                    <div className="border-b border-secondary py-4 last:border-b-0">
                                        <h3 className="mb-1 text-sm font-medium text-utility-blue-600">Security policy: Protect against unaut...</h3>
                                        <p className="text-xs text-tertiary">Compliance policy: Adhere to legal regulations</p>
                                    </div>
                                    <div className="border-b border-secondary py-4 last:border-b-0">
                                        <h3 className="mb-1 text-sm font-medium text-utility-blue-600">User data protection policy: Safeguard pers...</h3>
                                        <p className="text-xs text-tertiary">Accessibility policy: Ensure usability for all users</p>
                                    </div>
                                    <div className="border-b border-secondary py-4 last:border-b-0">
                                        <h3 className="mb-1 text-sm font-medium text-utility-blue-600">User feedback policy: Encourage user su...</h3>
                                        <p className="text-xs text-tertiary">Incident response policy: Address security brea...</p>
                                    </div>
                                    <div className="border-b border-secondary py-4 last:border-b-0">
                                        <h3 className="mb-1 text-sm font-medium text-utility-blue-600">Content moderation policy: Maintain a sa...</h3>
                                        <p className="text-xs text-tertiary">Privacy policy: Transparency in data collect...</p>
                                    </div>
                                </div>
                                <div className="mt-6 border-t border-secondary pt-4">
                                    <Button color="link-color" size="sm" iconTrailing={LinkExternal01}>
                                        Explore all Policies
                                    </Button>
                                </div>
                            </div>

                            {/* ADEK Systems Catalogues */}
                            <div className="rounded-lg border border-secondary bg-primary p-6">
                                <div className="mb-6 flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-primary">ADEK Systems Catalogues</h2>
                                </div>
                                <div className="space-y-0">
                                    <div className="border-b border-secondary py-4 last:border-b-0">
                                        <h3 className="mb-1 text-sm font-medium text-utility-blue-600">Design software</h3>
                                        <p className="text-xs text-tertiary">Super lightweight design app</p>
                                    </div>
                                    <div className="border-b border-secondary py-4 last:border-b-0">
                                        <h3 className="mb-1 text-sm font-medium text-utility-blue-600">Design software</h3>
                                        <p className="text-xs text-tertiary">Super lightweight design app</p>
                                    </div>
                                    <div className="border-b border-secondary py-4 last:border-b-0">
                                        <h3 className="mb-1 text-sm font-medium text-utility-blue-600">Design software</h3>
                                        <p className="text-xs text-tertiary">Super lightweight design app</p>
                                    </div>
                                    <div className="border-b border-secondary py-4 last:border-b-0">
                                        <h3 className="mb-1 text-sm font-medium text-utility-blue-600">Design software</h3>
                                        <p className="text-xs text-tertiary">Super lightweight design app</p>
                                    </div>
                                </div>
                                <div className="mt-6 border-t border-secondary pt-4">
                                    <Button color="link-color" size="sm" iconTrailing={LinkExternal01}>
                                        Explore all Systems Catalogues
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Calendar Section */}
                    <div>
                        {/* Search and Filter Above Calendar */}
                        {/* <div className="mb-4 space-y-3">
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <NativeSelect
                                        options={eventFilterOptions}
                                        defaultValue="all"
                                    />
                                </div>
                                <ButtonUtility color="tertiary" size="sm" icon={SearchLg} />
                            </div>
                        </div> */}

                        <div className="flex flex-col gap-6 rounded-lg border border-secondary bg-primary p-6">
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <NativeSelect options={eventFilterOptions} defaultValue="all" />
                                </div>
                                <ButtonUtility color="tertiary" size="sm" icon={SearchLg} />
                            </div>

                            <Calendar />

                            {/* Scrollable Events Section */}
                            <div className="border-t border-secondary pt-4">
                                <h4 className="mb-3 text-sm font-medium text-primary">School Academic Calendar</h4>
                                <div className="h-86 space-y-3 overflow-y-auto">
                                    {calendarEvents.map((event) => (
                                        <div key={event.id} className="flex items-start justify-between rounded-lg bg-secondary p-3">
                                            <div className="flex-1">
                                                <div className="mb-1 flex items-center justify-between">
                                                    <span className="text-xs font-medium text-secondary">{event.title}</span>
                                                    <Badge color="warning" size="sm">
                                                        {event.badge}
                                                    </Badge>
                                                </div>
                                                <p className="text-xs text-tertiary">📅 {event.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ADEK Surveys - Full Width with Horizontal Scroll */}
                <div className="mb-12 rounded-lg border border-secondary bg-primary p-6">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-primary">ADEK Surveys</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="flex min-w-max gap-6 pb-4">
                            <div className="w-80 flex-shrink-0 rounded-lg border border-secondary bg-primary p-4 transition-shadow hover:shadow-sm">
                                <div className="mb-2 flex items-start justify-between">
                                    <h3 className="text-sm font-medium text-primary">Student well being Survey</h3>
                                    <Badge color="brand" size="sm">
                                        New
                                    </Badge>
                                </div>
                                <p className="mb-3 text-xs text-tertiary">This survey will help us improve your student development</p>
                                <Button color="link-color" size="sm" iconTrailing={LinkExternal01}>
                                    Take the survey
                                </Button>
                            </div>

                            <div className="w-80 flex-shrink-0 rounded-lg border border-secondary bg-primary p-4 transition-shadow hover:shadow-sm">
                                <div className="mb-2 flex items-start justify-between">
                                    <h3 className="text-sm font-medium text-primary">School Environment</h3>
                                    <Badge color="brand" size="sm">
                                        New
                                    </Badge>
                                </div>
                                <p className="mb-3 text-xs text-tertiary">This survey will help us improve your student development</p>
                                <Button color="link-color" size="sm" iconTrailing={LinkExternal01}>
                                    Take the survey
                                </Button>
                            </div>

                            <div className="w-80 flex-shrink-0 rounded-lg border border-secondary bg-primary p-4 transition-shadow hover:shadow-sm">
                                <div className="mb-2 flex items-start justify-between">
                                    <h3 className="text-sm font-medium text-primary">Teacher Satisfaction Survey</h3>
                                    <Badge color="success" size="sm">
                                        Active
                                    </Badge>
                                </div>
                                <p className="mb-3 text-xs text-tertiary">Help us understand teacher experience and satisfaction</p>
                                <Button color="link-color" size="sm" iconTrailing={LinkExternal01}>
                                    Take the survey
                                </Button>
                            </div>

                            <div className="w-80 flex-shrink-0 rounded-lg border border-secondary bg-primary p-4 transition-shadow hover:shadow-sm">
                                <div className="mb-2 flex items-start justify-between">
                                    <h3 className="text-sm font-medium text-primary">Curriculum Feedback</h3>
                                    <Badge color="warning" size="sm">
                                        Draft
                                    </Badge>
                                </div>
                                <p className="mb-3 text-xs text-tertiary">Share your thoughts on our curriculum and learning materials</p>
                                <Button color="link-color" size="sm" iconTrailing={LinkExternal01}>
                                    Take the survey
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
