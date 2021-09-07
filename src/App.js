import React from "react";

import CheckBox from "./components/CheckBox/CheckBox";
import CheckRound from "./components/CheckRound/CheckRound";
import Radio from "./components/Radio/Radio";
import Toggle from "./components/Toggle/Toggle";
import StarToggle from "./components/StarToggle/StarToggle";
import Tooltip from "./components/Tooltip/Tooltip";

import Button from "./components/Button/Button";
import Loading from "./components/Loading/Loading";
import Avatar from "./components/Avatar/Avatar";

import Navbar from "./components/Navbar/Navbar";
import NavbarBrand from "./components/Navbar/NavbarBrand";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import NavbarItem from "./components/Navbar/NavbarItem";

import Sidebar from "./components/Sidebar/Sidebar";
import SidebarMenu from "./components/Sidebar/SidebarMenu";
import SidebarItem from "./components/Sidebar/SidebarItem";

import Box from "./components/Box/Box";
import Tag from "./components/Tag/Tag";
import Input from "./components/Input/Input";

import {ReactComponent as Person} from "./icons/person.svg";

function App() {
  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-shrink">
        <Sidebar active>
          <SidebarMenu>
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem label="Profile" />
            <SidebarItem label="Settings" />
            <SidebarItem label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
          </SidebarMenu>
        </Sidebar>
      </div>
      <div className="flex flex-1 flex-col">
        <Navbar position="top">
          <NavbarBrand
            logo="https://picsum.photos/64/48"
            name="Ansuz Development"
          />
          <NavbarMenu align="left">
            <NavbarItem label="Home" />
            <NavbarItem label="About us" />
            <NavbarItem label="Contact" />
          </NavbarMenu>
        </Navbar>

        <div className="container mx-auto py-20 space-y-6">
          <div className="space-x-4">
            <Tooltip
              title="It is a long established fact that a reader."
            >
              <CheckBox
                labelFirst
                label="Check me"
              />
            </Tooltip>
            <CheckRound
              label="Check me"
            />
          </div>
          <div className="space-x-4">
            <Radio
              labelFirst
              name="gender"
              label="Female"
            />
            <Radio
              name="gender"
              label="Male"
            />
          </div>
          <div className="space-x-4">
            <Toggle
              labelFirst
              label="Toggle me"
            />
            <Tooltip
              title="It is a long established fact that a reader."
            >
              <Toggle
                labelFirst
                direction="vert"
                label="Toggle me"
              />
            </Tooltip>
          </div>
          <div className="space-x-4">
            <StarToggle
              label="Toggle me"
            />
            <Tooltip
              title="It is a long established fact that a reader."
            >
              <StarToggle
                direction="vert"
                label="Toggle me"
              />
            </Tooltip>
          </div>
          <div className="space-x-4">
            <CheckBox
              labelFirst
              direction="vert"
              label="Check me"
            />
            <Tooltip
              title="It is a long established fact that a reader."
            >
              <CheckRound
                direction="vert"
                label="Check me"
              />
            </Tooltip>
          </div>
          <div className="space-x-4">
            <Radio
              labelFirst
              direction="vert"
              name="vehicle"
              label="Car"
            />
            <Tooltip
              title="It is a long established fact that a reader."
            >
              <Radio
                direction="vert"
                name="vehicle"
                label="Bike"
              />
            </Tooltip>
          </div>
          <div className="space-x-4">
            <Tooltip
              title="It is a long established fact that a reader."
            >
              <span>Hover</span>
            </Tooltip>
            <Tooltip
              title="It is a long established fact that a reader will be distracted."
            >
              <span>Hover me</span>
            </Tooltip>
            <Tooltip
              title="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            >
              <span>Hover me long</span>
            </Tooltip>
          </div>
          <div className="space-x-4">
            <Button>
              Click me
            </Button>
            <Button variant="outlined">
              Click me
            </Button>
            <Button color="secondary">
              Click me
            </Button>
            <Button color="secondary" variant="outlined">
              Click me
            </Button>
          </div>

          <div className="space-x-4">
            <Button loading>
              Click me
            </Button>
            <Button loading variant="outlined">
              Click me
            </Button>
            <Button loading color="secondary">
              Click me
            </Button>
            <Tooltip title="A button">
              <Button loading color="secondary" variant="outlined">
                Click me
              </Button>
            </Tooltip>
          </div>

          <div className="space-x-4">
            <Loading />
            <Loading color="secondary" />
          </div>

          <div className="space-x-4">
            <Avatar size="sm" src="https://i.pravatar.cc/32" alt="John Doe" />
            <Avatar size="md" src="https://i.pravatar.cc/64" alt="John Doe" />
            <Avatar size="lg" src="https://i.pravatar.cc/128" alt="John Doe" />
            <Avatar size="sm" alt="John Doe" />
            <Avatar size="md" alt="John Doe" />
            <Avatar size="lg" alt="John Doe" />
          </div>

          <div className="space-x-4">
            <Avatar size="sm" variant="rounded" src="https://i.pravatar.cc/32" alt="John Doe" />
            <Avatar size="md" variant="rounded" src="https://i.pravatar.cc/64" alt="John Doe" />
            <Avatar size="lg" variant="rounded" src="https://i.pravatar.cc/128" alt="John Doe" />
            <Avatar variant="rounded" alt="John Doe" />
          </div>

          <div className="space-x-4">
            <Avatar size="sm" variant="square" src="https://i.pravatar.cc/32" alt="John Doe" />
            <Avatar size="md" variant="square" src="https://i.pravatar.cc/64" alt="John Doe" />
            <Avatar size="lg" variant="square" src="https://i.pravatar.cc/128" alt="John Doe" />
            <Avatar size="lg" variant="square" src="https://badurl.com/avatar" alt="John Doe" />
            <Avatar variant="square" alt="John Doe" />
          </div>

          <div>
            <Navbar>
              <NavbarBrand
                showName
                logo="https://picsum.photos/64/48"
                name="Ansuz Development"
              />
              <NavbarMenu align="center">
                <NavbarItem label="Home" />
                <NavbarItem label="About us" />
                <NavbarItem label="Contact" />
              </NavbarMenu>
            </Navbar>
          </div>

          <div>
            <Box>
              <div className="space-x-2">
                <Tag variant="filled" color="primary" size="sm" label="Tag" />
                <Tag variant="filled" color="primary" size="md" label="Tag" />
                <Tag variant="filled" color="primary" size="lg" label="Tag" />
                <Tag variant="filled" color="secondary" size="sm" label="Tag" />
                <Tag variant="filled" color="secondary" size="md" label="Tag" />
                <Tag variant="filled" color="secondary" size="lg" label="Tag" />
                <Tag variant="outlined" color="primary" size="sm" label="Tag" />
                <Tag variant="outlined" color="primary" size="md" label="Tag" />
                <Tag variant="outlined" color="primary" size="lg" label="Tag" />
                <Tag variant="outlined" color="secondary" size="sm" label="Tag" />
                <Tag variant="outlined" color="secondary" size="md" label="Tag" />
                <Tag variant="outlined" color="secondary" size="lg" label="Tag" />
              </div>

            </Box>
          </div>

          <div>
            <Box>
              <div className="space-y-2">
                <div className="space-x-2">
                  <Input size="sm" placeholder="Fullname" />
                  <Input size="md" placeholder="Fullname" />
                  <Input size="lg" placeholder="Fullname" />
                </div>

                <Input
                  size="sm"
                  fullwidth
                  placeholder="Fullname"
                  startAdornment={<Person />}
                />
                <Input
                  fullwidth
                  placeholder="Fullname"
                  startAdornment={<Person />}
                />
                <Input
                  size="lg"
                  fullwidth
                  placeholder="Fullname"
                  startAdornment={<Person />}
                  hint="Fill your name"
                />

                <Input
                  size="sm"
                  fullwidth
                  placeholder="Fullname"
                  endAdornment={<Person />}
                />
                <Input
                  fullwidth
                  placeholder="Fullname"
                  endAdornment={<Person />}
                />
                <Input
                  size="lg"
                  fullwidth
                  placeholder="Fullname"
                  endAdornment={<Person />}
                />

                <Input
                  size="sm"
                  fullwidth
                  error
                  placeholder="Fullname"
                  startAdornment={<Person />}
                  endAdornment={<Person />}
                />
                <Input
                  fullwidth
                  error
                  placeholder="Fullname"
                  startAdornment={<Person />}
                  endAdornment={<Person />}
                />
                <Input
                  size="lg"
                  fullwidth
                  error
                  placeholder="Fullname"
                  startAdornment={<Person />}
                  endAdornment={<Person />}
                />
              </div>
            </Box>
          </div>
        </div>

        <Navbar position="bottom">
          <NavbarBrand
            name="Ansuz Development"
          />
          <NavbarMenu align="right">
            <NavbarItem label="Home" />
            <NavbarItem label="About us" />
            <NavbarItem label="Contact" />
          </NavbarMenu>
        </Navbar>
      </div>
      <div className="flex flex-shrink-1">
        <Sidebar position="right">
          <SidebarMenu>
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem label="Profile" />
            <SidebarItem label="Settings" />
            <SidebarItem label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
            <SidebarItem icon={Person} label="Home" />
            <SidebarItem icon={Person} label="Profile" />
            <SidebarItem icon={Person} label="Settings" />
          </SidebarMenu>
        </Sidebar>
      </div>
    </div>
  );
}

export default App;
