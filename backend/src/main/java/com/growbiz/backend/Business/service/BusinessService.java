package com.growbiz.backend.Business.service;

import com.growbiz.backend.Business.model.Business;
import com.growbiz.backend.Business.model.BusinessRequest;
import com.growbiz.backend.Business.model.BusinessStatus;
import com.growbiz.backend.Business.repository.IBusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class BusinessService implements IBusinessService {

    @Autowired
    private IFileStorageService fileStorageService;
    @Autowired
    private IBusinessRepository businessRepository;

    @Override
    public List<Business> fetchBusinesses(String status) {
        if (Objects.isNull(status)) {
            return fetchAllBusinesses();
        }
        return businessRepository.findByStatusEquals(BusinessStatus.valueOf(status));
    }

    @Override
    public List<Business> fetchAllBusinesses() {
        return StreamSupport.stream(businessRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    @Override
    public Business findByEmail(String email) {
        return businessRepository.findByEmail(email);
    }

    @Override
    public Business findById(Long businessId) {
        Optional<Business> businessOptional = businessRepository.findById(businessId);
        if (businessOptional.isPresent()) {
            return businessOptional.get();
        }
        throw new UsernameNotFoundException("User doesn't exists");
    }

    @Override
    public void save(Business business) {
        businessRepository.save(business);
    }

    @Override
    public Business save(BusinessRequest businessRequest) {
        String fileURL = fileStorageService.uploadFileToStorage(businessRequest.getFile(), businessRequest.getEmail());
        Business business = Business.builder()
                .businessName(businessRequest.getBusinessName())
                .email(businessRequest.getEmail())
                .fileURL(fileURL)
                .status(BusinessStatus.PENDING)
                .categoryId(businessRequest.getCategoryId())
                .build();
        businessRepository.save(business);
        return business;
    }

    @Override
    public Business updateBusiness(BusinessRequest businessRequest, Long businessId) {
        String fileURL = fileStorageService.uploadFileToStorage(businessRequest.getFile(), businessRequest.getEmail());
        Business business = Business.builder()
                .businessId(businessId)
                .businessName(businessRequest.getBusinessName())
                .email(businessRequest.getEmail())
                .fileURL(fileURL)
                .status(BusinessStatus.PENDING)
                .categoryId(businessRequest.getCategoryId())
                .build();
        businessRepository.save(business);
        return business;
    }
}
