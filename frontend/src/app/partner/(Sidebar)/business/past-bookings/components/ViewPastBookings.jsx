"use client";

import * as React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const ViewPastBookings = ({pastBookings }) => {
    return (
        <div>
            {pastBookings.length === 0 ?
                <div className="p-8 pl-16">
                    No Past Bookings.
                </div>
                :
                <div>
                    <div className="flex flex-wrap gap-4" style={{marginLeft: '3%'}}>
                        {pastBookings.map((pastBooking) => (
                            <Card key={pastBooking.bookingId} className="w-[350px] ml-5">
                                <CardHeader>
                                    <CardTitle>{pastBooking.serviceName}</CardTitle>
                                    <CardDescription>Booking Details</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor={`service-${pastBooking.bookingId}`} style={{ fontSize: '1rem', fontWeight: 'bold' }}>Time Required</Label>
                                            <span id={`service-${pastBooking.bookingId}`} style={{ fontSize: '0.875rem' }}>{pastBooking.timeRequired} minutes</span>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor={`service-${pastBooking.bookingId}`} style={{ fontSize: '1rem', fontWeight: 'bold' }}>Date</Label>
                                            <span id={`service-${pastBooking.bookingId}`} style={{ fontSize: '0.875rem' }}>{pastBooking.bookingDate}</span>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor={`service-${pastBooking.bookingId}`} style={{ fontSize: '1rem', fontWeight: 'bold' }}>Start Time</Label>
                                            <span id={`service-${pastBooking.bookingId}`} style={{ fontSize: '0.875rem' }}>{pastBooking.bookingStartTime}</span>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor={`service-${pastBooking.bookingId}`} style={{ fontSize: '1rem', fontWeight: 'bold' }}>End Time</Label>
                                            <span id={`service-${pastBooking.bookingId}`} style={{ fontSize: '0.875rem' }}>{pastBooking.bookingEndTime}</span>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor={`service-${pastBooking.bookingId}`} style={{ fontSize: '1rem', fontWeight: 'bold' }}>Customer Email</Label>
                                            <span id={`service-${pastBooking.bookingId}`} style={{ fontSize: '0.875rem' }}>{pastBooking.customerEmail}</span>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor={`service-${pastBooking.bookingId}`} style={{ fontSize: '1rem', fontWeight: 'bold' }}>Note</Label>
                                            <span id={`service-${pastBooking.bookingId}`} style={{ fontSize: '0.875rem' }}>{pastBooking.note}</span>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor={`service-${pastBooking.bookingId}`} style={{ fontSize: '1rem', fontWeight: 'bold' }}>Status</Label>
                                            <span id={`service-${pastBooking.bookingId}`} style={{ fontSize: '0.875rem' }}>{pastBooking.status}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default ViewPastBookings;