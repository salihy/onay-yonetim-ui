"use client";

import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import Icon from "@/components/ui/Icon";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Flatpickr from "react-flatpickr";
import { useForm, useFieldArray } from "react-hook-form";


const InputlayoutPage = () => {
  const [checked, setChecked] = useState(true);

  const [vmVal, setVmValue] = useState("");
  const [vmRoomVal, setVmRoomValue] = useState("");
  const [vmRoomCabinVal, setVmRoomCabinValue] = useState("");
  const [vmRoomDropdown, setVmRoomDropDown] = useState([]);
  const [vmRoomCabinetDropdown, setVmRoomCabinetDropDown] = useState([]);
  const [startPicker, setStartPicker] = useState(new Date());
  const [endPicker, setEndPicker] = useState(new Date());

  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      defaultValues: {
        test: [{ name: "", tckn: "", phone: "" }],
      },
    }
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const vm_list = [
    {
      value: "vm1",
      label: "Ptech Veri Merkezi",
    },
    {
      value: "vm2",
      label: "Vodafone Veri Merkezi",
    },
    {
      value: "vm3",
      label: "Turkcell Veri Merkezi",
    },
  ];

  const vm_room_list = [
    {
      vm_id: "vm1",
      rooms: [
      {
        value: "r1",
        label: "Ptech Veri Merkezi Salon 1",
      },
      {
        value: "r2",
        label: "Ptech Veri Merkezi Salon 2",
      },
      {
        value: "r3",
        label: "Ptech Veri Merkezi Salon 3",
      },
      {
        value: "r4",
        label: "Ptech Veri Merkezi Salon 4",
      }]
    },
    {
      vm_id: "vm2",
      rooms: [
        {
          value: "r5",
          label: "Vodafone Veri Merkezi Salon 1",
        },
        {
          value: "r6",
          label: "Vodafone Veri Merkezi Salon 2",
        },
        {
          value: "r7",
          label: "Vodafone Veri Merkezi Salon 3",
        },
        {
          value: "r8",
          label: "Vodafone Veri Merkezi Salon 4",
        }
      ]
    },
    {
      vm_id: "vm3",
      rooms: [
        {
          value: "r9",
          label: "Turkcell Veri Merkezi Salon 1",
        },
        {
          value: "r10",
          label: "Turkcell Veri Merkezi Salon 2",
        },
        {
          value: "r11",
          label: "Turkcell Veri Merkezi Salon 3",
        },
        {
          value: "r12",
          label: "Turkcell Veri Merkezi Salon 4",
        }
      ]
    }
  ];

  const cabins = [
    {
      room_id: "r1",
      cabins: [
        {
          value: "c1",
          label: "Ptech VM Salon 1 Cabin 1"
        },
        {
          value: "c2",
          label: "Ptech VM Salon 1 Cabin 2"
        },
        {
          value: "c3",
          label: "Ptech VM Salon 1 Cabin 3"
        },
      ]
    }, 
    {
      room_id: "r5",
      cabins: [
        {
          value: "c4",
          label: "Vodafone VM Salon 1 Cabin 1"
        },
        {
          value: "c5",
          label: "Vodafone VM Salon 1 Cabin 2"
        },
        {
          value: "c6",
          label: "Vodafone VM Salon 1 Cabin 3"
        },
      ]
    }, 
  ]

  const handleChange = (e) => {
    const vm_id = e.target.value;
    setVmValue(vm_id);
    if(vm_room_list.filter((e) => e.vm_id == vm_id).length > 0) {
      setVmRoomDropDown(vm_room_list.filter((e) => e.vm_id == vm_id)[0].rooms);
    }
    else {
      setVmRoomDropDown([]);
    }
  };

  const handleRoomChange = (e) => {
    const room_id = e.target.value; 
    setVmRoomValue(room_id);
    if(cabins.filter((e) => e.room_id == room_id).length > 0) {
      setVmRoomCabinetDropDown(cabins.filter((e) => e.room_id == room_id)[0].cabins);
    }
    else {
      setVmRoomCabinetDropDown([]);
    }
  };

  const handleCabinChange = (e) => {
    setVmRoomCabinValue(e.target.value);
  }

  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 gap-5">
      
      <Card title="Onay Girisi" >
        <div className="space-y-4">
          <Select
              label="Veri Merkezi"
              options={vm_list}
              onChange={handleChange}
              value={vmVal}
              prepend={<Icon icon="heroicons-outline:building-office" />}
            />
          <Select
              label="Veri Merkezi Salonu"
              options={vmRoomDropdown}
              onChange={handleRoomChange}
              value={vmRoomVal}
              prepend={<Icon icon="heroicons-outline:building-office" />}
            />
          <Select
              label="Calisma Yapilacak Kabin"
              options={vmRoomCabinetDropdown}
              onChange={handleCabinChange}
              value={vmRoomCabinVal}
              prepend={<Icon icon="heroicons-outline:server-stack" />}
            />
          <InputGroup
            label="Firma Bilgisi"
            id="firma_bilgisi_text"
            type="text"
            placeholder="ABC Ltd. Sti"
            prepend={<Icon icon="heroicons-outline:building-office" />}
            merged
          />
          <Textarea
            label="Calisma Detayi"
            id="calisma_detay_text"
            placeholder="Type here"
          />
          <Textarea
            label="Monte/Demonte Cihaz Bilgisi"
            id="cihaz_bilgisi_text"
            placeholder="Type here"
          />
          <InputGroup
            label="Arac Bilgisi"
            id="arac_bilgisi_text"
            type="text"
            placeholder="34ABC0000"
            prepend={<Icon icon="heroicons-outline:key" />}
            merged
          />
          <label className="form-label" for="range-picker">
            Baslangic Bitis Zamani
          </label>
          <div className="grid grid-cols-2 gap-5">
            <Flatpickr
              value={startPicker}
              data-enable-time
              id="start-date"
              className="form-control py-2"
              onChange={(date) => setStartPicker(date)}
            />
            <Flatpickr
              value={endPicker}
              data-enable-time
              id="end-date"
              className="form-control py-2"
              onChange={(date) => setEndPicker(date)}
            />
          </div>
          <div className="items-end">
          <Button
            text="Ekle"
            icon="heroicons-outline:plus"
            className="btn-dark"
            onClick={() => append()}
          />
          </div>
          {fields.map((item, index) => (
            <div
              className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 mb-5 last:mb-0"
              key={index}
            >
              <Textinput
                label="First Name"
                type="text"
                id={`name${index}`}
                placeholder="First Name"
                register={register}
                name={`test[${index}].firstName`}
              />

              <Textinput
                label="last Name"
                type="text"
                id={`name2${index}`}
                placeholder="Last Name"
                register={register}
                name={`test[${index}].lastName`}
              />

              <div className="flex justify-between items-end space-x-5">
                <div className="flex-1">
                  <Textinput
                    label="Phone"
                    type="text"
                    id={`name3${index}`}
                    placeholder="Phone"
                    register={register}
                    name={`test[${index}].phone`}
                  />
                </div>
                <div className="flex-none relative">
                  <button
                    onClick={() => remove(index)}
                    type="button"
                    className="inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white"
                  >
                    <Icon icon="heroicons-outline:trash" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className=" space-y-4">
            <Button text="Onaya Gonder" className="btn-dark" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InputlayoutPage;
