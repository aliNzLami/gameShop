import React, { useContext, useState, useEffect } from 'react'

// context
import { ShopContext } from "../../assets/context/ShopContext"
import { SearchContext } from '../../assets/context/SearchContext';

// icon
import arrowRight from "../../assets/icons/iconPics/arrowRight.png"

// filter lists
import { countries } from '../../assets/icons/countries';
import { platforms } from '../../assets/icons/platforms';
import { companies } from '../../assets/icons/companies';

// components
import FilterCollections from './FilterCollections';
import CollectionItems from './CollectionItems';
import Container from "../../components/Container";
import Title from "../../components/Collection/Title";
import CustomCollection from '../../components/Collection/CustomCollection';


function Collection() {

  const shopData = useContext(ShopContext);
  const { searchContent } = useContext(SearchContext);
  
  // ---------------------------------------------- Variables

    const platformList = {
      xbox: platforms.xbox.icon,
      playStation: platforms.ps1.icon,
      windows: platforms.windows.icon,
      mac: platforms.mac.icon,
      linux: platforms.linux.icon,
      android: platforms.android.icon,
      ios: platforms.ios.icon,
      nintendo: platforms.nintendo64.icon,
    }
    
    const decadeList = {
      "90s": "",
      "2000s": "",
      "2010s": "",
      "2020s": "",
    }

    const nationalities = {
      us: countries.us.pic,
      japan: countries.japan.pic,
      finland: countries.finland.pic,
      france: countries.france.pic, 
      canada: countries.canada.pic,
      uk: countries.uk.pic,
      poland: countries.poland.pic,
    }

    const companiesList = {
      "Namco": companies.namco.icon,
      "Ubisoft": companies.ubisoft.icon,
      "Warner Bros": companies.warner.icon,
      "Remedy": companies.remedy.icon,
      "EA": companies.ea.icon,
      "Square Enix": companies.squareEnix.icon,
      "Sony": companies.sony.icon,
      "Capcom": companies.capcom.icon,
      "CD Projeckt": companies.CDP.icon,
      "Activision": companies.activision.icon,
    }

    // ---------------------------------------------- States

    const [ showFilter, setShowFilter ] = useState(window.innerWidth > 767 ? true : false);
    const [ filteredProduct, setFilteredProducts ] = useState([]);
    
    const [ filters, setFilters ] = useState({
      nationalities: [],
      platforms: [],
      companies: [],
      decade: [],
      latest: false,
      bestSeller: null
    });

    // ---------------------------------------------- Functions

    const onChangeCheckBoxHandler = (value) => {
      const newFilters = {...filters};
      const group = newFilters[value.group];
      const name = value.name;
      const index = group.indexOf(name)

      if(value.checked) {
        if(!group.includes(name)) {
          group.push(name) 
        }
      }
      else {
        group.splice(index, 1) 
      }
      setFilters({...newFilters});
      
    }

    const onChangeToggleHandler = (value) => {
      const newFilters = {...filters};

      if(value.name === "Best Seller") {
        newFilters.bestSeller = value.checked ? true : null;
      }
      if(value.name === "Latest") {
        newFilters.latest = value.checked;
      }

      setFilters({...newFilters});
    }

    const applyFilters = () => {
      let newProducts_nationality = [];
      let newProducts_platform = [];
      let newProducts_companies = [];
      let newProducts_decades = [];
      let newProducts_bestSeller = [];
      let newProducts_latest = [];
      let newProducts_all = [];

      if(filters.nationalities.length) {
        const filtered = apply_nationality_filter();
        newProducts_nationality = [...new Set(filtered)];  
      }
      if(filters.platforms.length) {
        const filtered = apply_platforms_filter();
        newProducts_platform = [...new Set(filtered)];
      }
      if(filters.decade.length) {
        const filtered = apply_decade_filter();
        newProducts_decades = [...new Set(filtered)];
      }
      if(filters.companies.length) {
        const filtered = apply_company_filter();
        newProducts_companies = [...new Set(filtered)];
      }
      
      if(filters.latest) {
        const filtered = apply_latest_filter();
        newProducts_bestSeller = [...new Set(filtered)];
      }
      if(filters.bestSeller) {
        const filtered = apply_bestSeller_filter();
        newProducts_bestSeller = [...new Set(filtered)];
      }
      
      newProducts_all = [
        ...newProducts_nationality,
        ...newProducts_platform,
        ...newProducts_decades,
        ...newProducts_companies,
        ...newProducts_bestSeller,
        ...newProducts_latest,
        ...newProducts_all
      ]

      if(newProducts_all.length) {
        setFilteredProducts([...new Set(newProducts_all)]);
      }
      else {
        setFilteredProducts([...shopData.products]);
      }
      
    }

    const apply_nationality_filter = () => {
      const newFiltered = [];
      [...shopData.products].map(item => {
        item.country.map(itemCountry => {
          if(filters.nationalities.includes(itemCountry.name)) {
              newFiltered.push(item);
          }
        })
      })
      return newFiltered;
    }

    const apply_platforms_filter = () => {
      const newFiltered = [];

      for(let item of [...shopData.products]) {
        for(let itemPlatform of item.platforms) {
          if(filters.platforms.includes(itemPlatform.nature)) {
            newFiltered.push(item);
            continue;
          }
        }
      }

      return newFiltered;
    }

    const apply_decade_filter = () => {
      const newFiltered = [];
      for(let item of [...shopData.products]) {
        if(item.year < 2000) {
          if(filters.decade.includes("90s")){
            newFiltered.push(item);
          } 
        }
        if(item.year < 2010 && item.year > 1999) {
          if(filters.decade.includes("2000s")){
            newFiltered.push(item);
          } 
        }
        if(item.year < 2020 && item.year > 2009) {
          if(filters.decade.includes("2010s")){
            newFiltered.push(item);
          } 
        }
        if(item.year > 2019) {
          if(filters.decade.includes("2020s")){
            newFiltered.push(item);
          } 
        }
      }

      return newFiltered;
    }

    const apply_company_filter = () => {
      const newFiltered = [];

      for(let item of [...shopData.products]) {
        for(let itemCompany of item.company) {
          if(filters.companies.includes(itemCompany.filterName)) {
            newFiltered.push(item);
            continue;
          }
        }
      }
      return newFiltered;
    }

    const apply_bestSeller_filter = () => {
      const newFiltered = [];
      for(let item of [...shopData.products]) {
        if(item.bestSeller) {
          newFiltered.push(item);
        }
      }

      return newFiltered;
    }

    const apply_latest_filter = () => {
      const newFiltered = shopData.products.slice(0, 15);
      return newFiltered;
    }

    const searchHandler = () => {
      const newProducts = [];
      const oldProducts = [...filteredProduct];
      if(!searchContent) {
        applyFilters();
      }
      if(searchContent.length > 2) {
        for(let item in filteredProduct) {
          if(filteredProduct[item].name.toLowerCase().includes(searchContent.toLowerCase())) {
            newProducts.push(filteredProduct[item]);
          }
        }
        setFilteredProducts([...newProducts])
      }
    }

    // ---------------------------------------------- Effects
    useEffect(() => {
      setFilteredProducts([...shopData.products]);
    }, [])

    useEffect(() => {
      applyFilters()
    }, [filters])

    useEffect(() => {
      searchHandler();
    }, [searchContent])
    
    
    return (
      <Container>

        <div className='flex flex-col md:flex-row gap-1 sm:gap-10 pt-10'>
          <div className="min-w-60">
            <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => setShowFilter(!showFilter)}>
              FILTERS
              <img src={arrowRight} className={`arrowFilter ${showFilter ? 'arrowRotate' : 'arrowStable' }`} />
            </p>

              <FilterCollections 
                title={"NATIONALITIES"}
                list={nationalities}
                showFilter={showFilter}
                onChange={(value) => onChangeCheckBoxHandler({ ...value, group: "nationalities" })}
              />

              <div className='mt-10'>
                <FilterCollections 
                  title={"PLATFORMS"}
                  list={platformList}
                  showFilter={showFilter}
                  onChange={(value) => onChangeCheckBoxHandler({ ...value, group: "platforms" })}
                />
              </div>

              <div className='my-10'>
                <FilterCollections 
                  title={"COMPANIES"}
                  list={companiesList}
                  showFilter={showFilter}
                  onChange={(value) => onChangeCheckBoxHandler({ ...value, group: "companies" })}
                />
              </div>

              <div className='mb-10'>
                <FilterCollections 
                  title={"DECADE"}
                  list={decadeList}
                  showFilter={showFilter}
                  onChange={(value) => onChangeCheckBoxHandler({ ...value, group: "decade" })}
                />
              </div>

              <FilterCollections 
                title={"OTHERS"}
                list={{"Best Seller": "", "Latest": ""}}
                showFilter={showFilter}
                onChange={(value) => onChangeToggleHandler(value)}
              />
          </div>

          {
            filteredProduct.length
            ?
              <>
                  <CustomCollection 
                    text1={'ALL'} 
                    text2={"COLLECTIONS"}
                    productList={filteredProduct}
                    marginTop={false}
                  />
              </>
            :
              <p className='noFoundItem'>
                {`${searchContent} have not been found`}
              </p>
          }

        </div>
      </Container>
    )
}

export default Collection