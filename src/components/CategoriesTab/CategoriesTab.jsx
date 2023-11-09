import { useEffect, useState } from "react";
import {  Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabsCard from "./TabsCard";
import useAxiosNoCredentials from "../../hooks/useAxiosNoCredentials";
import Title from "../../utils/Title";
import { useMemo } from "react";

const CategoriesTab = () => {
  const axios = useAxiosNoCredentials()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [categoryData, setCategoryData] = useState([]);

  console.log(selectedIndex);
  console.log(categoryData);

  const categories = useMemo(()=> [
    "web_development",
    "digital_marketing",
    "graphics_design",
  ],[])


  useEffect(()=>{

    const fetchData = async()=>{
      try {
       const res = await axios.get(`/jobs?category=${categories[selectedIndex]}`)
       setCategoryData(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  },[axios, categories, selectedIndex])


  return (
    <Tabs className="my-20">
      <Title title="Browse By category" describe="See jobs, what category you like"></Title>
      
      <TabList>
        {
          categories.map((category, index)=> (
            <Tab key={index} onClick={()=> setSelectedIndex(index)}>
              <div className="border p-2 rounded-md hover:border-action-primary-clr transition ease-linear duration-200">
              <h2 className="text-lg text-gray-600 hover:text-action-primary-clr">{category}</h2></div>
            </Tab>
          ))
        }
      </TabList>


      { 
        categories.map((c,idx)=>{
          return <TabPanel key={idx} >
            <div className="grid gap-6">
            
              {
                categoryData.map(job => <TabsCard key={job?._id} job={job}></TabsCard>
                )
              }
            </div>
            {
              categoryData.length === 0 && <h2 className="text-gray-600 text-xl">No Jobs Found</h2>
            }
          </TabPanel>
        })
      }
      
    </Tabs>
  );
};

export default CategoriesTab;
