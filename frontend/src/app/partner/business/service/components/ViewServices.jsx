"use client";

import * as React from "react";
import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import AddService from "./AddService";
import UpdateService from "./UpdateService";
import DeleteService from "./DeleteService";
import { Button } from "@/components/ui/button";

const ViewServices = ({ authSession, predefinedServices }) => {
    const [services, setServices] = useState([]);
    const [renderAddService, setRenderAddService] = useState(false);
    const [renderUpdateService, setRenderUpdateService] = useState(false);
    const [formDefaults, setFormDefaults] = useState(null);

    return (
        <div>
            {renderAddService && <AddService predefinedServices={predefinedServices} cancelButton={true} services={services} setServices={setServices} setRenderAddService={setRenderAddService} formDefaults={formDefaults} setFormDefaults={setFormDefaults} />}
            {renderUpdateService && <UpdateService predefinedServices={predefinedServices} cancelButton={true} services={services} setServices={setServices} setRenderUpdateService={setRenderUpdateService} formDefaults={formDefaults} setFormDefaults={setFormDefaults} />}
            {services.length === 0 ?
                <AddService predefinedServices={predefinedServices} cancelButton={false} services={services} setServices={setServices} setRenderAddService={setRenderAddService} formDefaults={formDefaults} setFormDefaults={setFormDefaults} />
                :
                <div>
                    <Button type="button" onClick={() => setRenderAddService(true)} style={{marginTop: '1%', marginLeft: '7%'}}>Add</Button>
                    <div className="flex flex-wrap gap-4" style={{ marginTop: '1%', marginLeft: '7%' }}>
                        {services.map((service) => (
                            <Card key={service.serviceId} className="w-[350px]">
                                <CardHeader>
                                    <CardTitle>{service.serviceName}</CardTitle>
                                    <CardDescription>service details</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor={`service-${service.serviceId}`} style={{ fontSize: '1rem', fontWeight: 'bold' }}>Price per hour</Label>
                                            <span id={`service-${service.serviceId}`} style={{ fontSize: '0.875rem' }}>{service.servicePrice} CAD</span>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor={`service-${service.serviceId}`} style={{ fontSize: '1rem', fontWeight: 'bold' }}>Time required</Label>
                                            <span id={`service-${service.serviceId}`} style={{ fontSize: '0.875rem' }}>{service.timeRequired} minutes</span>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor={`service-${service.serviceId}`} style={{ fontSize: '1rem', fontWeight: 'bold' }}>Description</Label>
                                            <span id={`service-${service.serviceId}`} style={{ fontSize: '0.875rem' }}>{service.description}</span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <div className="flex space-x-4">
                                        <Button type="button" onClick={() => { setRenderUpdateService(true); setFormDefaults(service) }}>Update</Button>
                                        <DeleteService service={service} services={services} setServices={setServices} />
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default ViewServices;